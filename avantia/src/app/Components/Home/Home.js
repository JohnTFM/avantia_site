import '../Home/Home.css'





export default function Home() {
    



        return <section id={"Home"} className='HomeBackGround'>
                    <div className='Mov-Text'>
                        <div className='Text-Ideias'>Você tem ideias para o seu negócio?</div>
                        <div className='text-Realidade'>Então nos deixe transformá-las em realidade!</div>
                        <button className='QroAgir'> <p className='MovQroAgir'>Quero Agir!</p> 
                            <img src='/imagens/Vector.png' className='ImgVector'/>
                        </button>
                    </div>                
                    <div className='Mov-logoAvantia'>
                            <img src='/imagens/logo.png' className='LogoHome'></img>
                    </div>
           </section>

}
