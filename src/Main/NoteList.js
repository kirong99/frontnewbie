import NoteItem from "./NoteItem";
import '../main.css';

const NoteList = ({onEdit, onRemove, notelist}) => {
    return(
        <div className="NoteList">
            <h4 className="font">{notelist.length}개의 할 일이 있습니다.</h4>
            <div>
                { notelist && notelist.map((it) => (
                    <NoteItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
                )) }
            </div>
        </div>
    );
};

NoteList.defaultProps = {
    notelist:[],
};

export default NoteList;