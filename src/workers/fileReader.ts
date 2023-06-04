import { CommonApis } from '@/apis/commonApis'
import { CommonApisImp } from '@/apis/commonApisImp'
import { inject, injectable, registry, delay } from 'tsyringe'

@injectable()
@registry([
  {
    token: 'CommonApis',
    useToken: delay(() => CommonApisImp)
  }
])
export class FileReader {
  constructor(@inject('CommonApis') private commonApis: CommonApis) {
    this.commonApis = commonApis
  }

  Read = async (url: string): Promise<any> => {
    return await this.commonApis.ReadFile(url)
  }
}
