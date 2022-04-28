
export const Home = (props) => {
    return (
        <> 
        <div className='container'>
            <div className="image" style={{display:'flex', justifyContent:'center'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDcMQIDqtkXtO33Ja-Qk_6-686Ts9x8NQ7g&usqp=CAU" alt=""></img>
            </div>
            <h1 style={{display:'flex', justifyContent:'center', padding:'10px 10px 10px 10px'}}>Indian Institute of Information Technology, Pune</h1>
            <h5 style={{display:'flex', justifyContent:'center', padding:'10px 10px 10px 10px'}}>Students please complete your On-Boarding Process by Registering here and giving all required details.</h5>
            <h6 style={{display:'flex', justifyContent:'center', padding:'10px 10px 10px 10px'}}>You can visit Indian Institute of Information Technology, Pune Website for more information regarding Institute.</h6>
            <a href="https://www.iiitp.ac.in/" target='_blank' rel='noreferrer' class="btn btn-danger btn-lg" role="button" style={{marginLeft:'47%', padding:'10px 10px 10px 10px'}}>IIIT Pune</a>
        </div>
        </>
    )
}
