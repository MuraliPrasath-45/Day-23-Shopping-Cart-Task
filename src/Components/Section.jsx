import React from 'react'

function Section(props) {
    let {notes}=props;
    function Handleevent(id) {


        let Button = document.getElementById(`${id}`)

        if (Button.innerHTML === 'Add to cart') {

            Button.innerHTML = "Remove item"
            Button.style.backgroundColor = "#f00"
            Button.style.fontWeight = 'bold'
            let Addcart = document.getElementById(`addcart`);
            let AddcartValue = Number(Addcart.innerHTML);
            if (AddcartValue > -1 && AddcartValue !== 6) {
                Addcart.innerHTML = AddcartValue + 1
            }

        } else if (Button.innerHTML === "Remove item") {
            Button.innerHTML = "Add to cart"
            Button.removeAttribute('style')
            let Addcart = document.getElementById(`addcart`);
            let AddcartValue = Number(Addcart.innerHTML);
            if (AddcartValue > -1 && AddcartValue <= 6) {
                Addcart.innerHTML = AddcartValue - 1
            }
        }




    }


    function ProductName({ notes }) {
        if (notes.name !== 'Fancy Product') {
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">


                                <h5 className="fw-bolder">{notes.name}</h5>

                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                </div>

                                <span className="text-muted text-decoration-line-through">{notes.price1}</span>
                                {notes.price2}
                            </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#cart" id={notes.id} onClick={() => Handleevent(notes.id)}>{notes.linkname}</button></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">


                                <h5 className="fw-bolder">{notes.name}</h5>

                                {notes.price1}
                                {notes.price2}
                            </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" id={notes.id} href="#addcart">{notes.linkname}</a></div>
                        </div>
                    </div>
                </div>
            )
        }



    }

  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {notes.map((note, index) =>
                <ProductName key={note.id} notes={note} />

            )}

        </div>
    </div>
</section>
  )
}

export default Section;