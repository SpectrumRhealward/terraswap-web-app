import { MIR } from "constants/constants"
import { useContractsAddress } from "hooks"
import { useLazyContractQueries } from "graphql/useContractQueries"

export default () => {
  const { contracts } = useContractsAddress()
  const generate = ({ token, symbol }: ListedItem) => {
    const variables = {
      contract: contracts["mint"],
      msg: { asset_config: { asset_token: token } },
    }

    return symbol === MIR ? undefined : variables
  }

  const query = useLazyContractQueries<MintInfo>(generate)
  return query
}
