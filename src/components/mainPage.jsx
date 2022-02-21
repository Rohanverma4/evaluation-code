import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

export const MainPage = () => {
    const param = useParams()
    const [data, setData] = useState([])
    const store = useSelector((store) => store.result)

    useEffect(() => {
        const comeData = store.filter((item) => item.id == param.id);
        setData(comeData[0])
    },[])

    return (
        <div>
            <p className="title">{data.title}</p>
            <p className="author">{data.author}</p>
            <p className="creation-date">{data.creation_date}</p>
            <p className="explicit">{data.explicit ? "true" : "false"}</p>
            <p className="quality">{data.quality}</p>
        </div>
    )
}