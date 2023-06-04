import { storeToRefs } from 'pinia'
import { container } from 'tsyringe'
import { useCommonStore } from '@/store/commonStore'
import { FileReader } from '@/workers/fileReader'

const useCommon = () => {
  const commonStore = useCommonStore()
  const { testCommonStoreState } = storeToRefs(commonStore)

  const fileReader = container.resolve(FileReader)

  const ReadFile = async (url: string) => {
    testCommonStoreState.value = await fileReader.Read(url)
    return await fileReader.Read(url)
  }

  return { testCommonStoreState, ReadFile }
}

export default useCommon
