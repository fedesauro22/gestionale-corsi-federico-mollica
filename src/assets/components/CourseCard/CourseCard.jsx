export function CourseCard({ Titolo, Descrizione, Durata, Categoria }) {
    return (
        <div className="card mt-3 mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{Titolo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{Descrizione}</h6>
                <p className="card-text">Durata: {Durata} ore</p>
                <p className="card-text">Categoria: {Categoria}</p>
            </div>
        </div>
    );
}