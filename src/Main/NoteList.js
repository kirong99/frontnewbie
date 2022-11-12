import NoteItem from "./NoteItem";

const NoteList = ({onEdit, onRemove, notelist}) => {
    return(
        <div className="NoteList">
            <h4>{notelist.length}개의 할 일이 있습니다.</h4>
            <div>
                {notelist.map((it) => (
                    <NoteItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    );
};

NoteList.defaultProps = {
    notelist:[],
};

export default NoteList;