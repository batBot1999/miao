import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import Aria2Client from "./aria2-client"
import { useInput } from "./hooks"

export interface IProps {
  client: Aria2Client
}

export default function NewTask({ client }: IProps) {
  var uris = useInput('')
  var downloadSpeed = useInput('10k')

  var navigate = useNavigate()

  function start() {
    if (torrentFile) {
      var reader = new FileReader()
      reader.onload = function () {
        if (typeof reader.result === 'string') {
          var base64Idx = reader.result.indexOf('base64')
          var torrentBase64 = reader.result.slice(base64Idx + 7)
          // @ts-ignore
          client.addTorrent(torrentBase64)
          navigate('/downloading')
        }
      }
      reader.readAsDataURL(torrentFile)
    } else {
      var links = uris.value.split('/n').map(it => it.trim()).filter(it => it) // useInput展开后有value属性和onChange事件,按回车拆分,而且每次回车是一个新链接,空格是不要的,trim()掉空格.最后过滤一下取非空.
      console.log('下载链接', links)
      for (var link of links) { // 每一个link都要调用一次
        // @ts-ignore
        client.addUri([link], { // 数组形式允许添加多个地址链接.
          'max-download-limit': downloadSpeed.value
        })
      }
      navigate('/downloading')
    }
  }

  var [torrentFile, setTorrentFile] = useState<File | null>(null)
  function onBTFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setTorrentFile(e.target.files[0] ?? null)
    }
  }

  var parsedTorrent = useMemo(() => {
    return parsedTorrent(torrentFile)
  }, [torrentFile])

  return (
    <div>
      <div>
        选项
        <div>下载速度: <input type="text" {...downloadSpeed} /></div>
      </div>
      <div>
        <div>下载链接,一行一个:</div>
        <div>选择bt种子文件: <input type="file" onChange={onBTFileSelect} /></div>
        <div>
          <textarea cols={60} rows={10} {...uris}></textarea>
        </div>
        <button onClick={start}>开始下载</button>
      </div>
    </div>
  )
}