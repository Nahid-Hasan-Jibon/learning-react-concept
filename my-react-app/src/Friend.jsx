

const Friend = ({bondhu}) => {
    console.log(bondhu)
    return (
        <div className="box">
            <h4>Name:{bondhu.name}</h4>
            <h4>Email:{bondhu.email}</h4>
            
        </div>
    );
};

export default Friend;