import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext"
import BN from "bn.js"

export const usePureProxyCreationNeededFunds = () => {
  const { isApiReady, api, chainInfo } = useApi()
  const [min, setMin] = useState(new BN(0))

  useEffect(() => {
    if (!isApiReady || !api) return

    if (!chainInfo?.tokenDecimals) return

    const reserved = (api.consts.proxy.proxyDepositFactor as unknown as BN)
    // we only create one proxy here
      .muln(1)
      .iadd(api.consts.proxy.proxyDepositBase as unknown as BN)


    // the signer should survive and have at lease the existential deposit
    // play safe and add the existential deposit twice which should suffice
    const survive = (api.consts.balances.existentialDeposit as unknown as BN).muln(2)

    setMin(reserved.add(survive))
    // console.log('reserved Pure Creation', formatBnBalance(reserved.add(survive), chainInfo.tokenDecimals, { tokenSymbol: chainInfo?.tokenSymbol, numberAfterComma: 3 }))
  }, [api, chainInfo, isApiReady])

  return { pureProxyCreationNeededFunds: min }
}