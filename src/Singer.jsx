export default function Singer({singer}){
    console.log(singer);
    return (
        <div>
            <h2>Singer id: {singer.id}</h2>
            <h3>Singer: {singer.name}</h3>
            <h4>age: {singer.age}</h4>
        </div>
    )
}