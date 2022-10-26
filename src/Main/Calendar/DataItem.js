const DataItem = ({title, date}) => {
    return (
        <div className="DataItem">
            <div className="title">{title}{date}</div>
        </div>
    )

}

export default DataItem;