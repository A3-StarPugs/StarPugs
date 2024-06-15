import React from "react";
import styles from "./Styles/SobreNos.module.scss";



export default function SobreNos() {
  return (
    
 
  <div className={styles.container}>
    
    <header className={styles.header}>
        <span className={styles.titulosp1}>Um Pouco Sofre A</span>
        <h1 className={styles.titulosp2}>StarPugs</h1>

    </header>

    <section className={styles.headerp2}>

      <div className={styles.containerTextosHeaderp2}>
    
        <h1 className={styles.titulop2header}>Atmosfera inclusiva e acolhedora.</h1>

        <span className={styles.textop2header}>Um diferencial marcante da STARPUGS em relação às cafeterias convencionais é a sua atmosfera inclusiva e acolhedora para cães. Enquanto muitos estabelecimentos têm restrições ou não são adequados para animais de estimação, a STARPUGS abraça a presença dos peludos e os trata como membros da família.</span>
    </div>
      

    </section>

    

    <main className="main">
      <div className={styles.containerTextoMain}>
              <h1 className={styles.tituloMain}> Bem-Vindo à STARPUGS!</h1>
              <div className={styles.ContainerParagrafosMain}>
                <p className={styles.textoMain}>
              Uma charmosa cafeteria que combina duas paixões irresistíveis: café e companhia canina. Localizada em um cantinho acolhedor da cidade, a STARPUGS não é apenas um lugar para desfrutar de uma xícara de café aromático, mas também um refúgio para os amantes de cães.</p>

              <p className={styles.textoMain}>Ao entrar na STARPUGS, você é imediatamente recebido por um ambiente caloroso e alegre. O aroma do café recém torrado paira no ar, misturado com o som suave de conversas animadas e o tilintar de coleiras de cachorro. A decoração é encantadora, com elementos que homenageiam os nossos amigos de quatro patas: fotos de cães adornam as paredes e pequenas esculturas de cachorros enfeitam as mesas.</p>

              <p className={styles.textoMain}>Os clientes são incentivados a trazer seus próprios cães para desfrutar da experiência junto com eles. Na STARPUGS, os peludos são mais do que bem-vindos - eles são tratados como verdadeiros VIPs. Há até um menu especial para cães, com petiscos deliciosos e saudáveis feitos com ingredientes naturais, além de tigelas de água fresca disponíveis em todos os cantos.</p>

              <p className={styles.textoMain}>Enquanto os cães se divertem socializando e farejando novos amigos, os humanos podem relaxar e saborear uma variedade de cafés especiais, desde o clássico expresso italiano até os mais elaborados lattes e cappuccinos. A equipe da STARPUGS é apaixonada por café e está sempre pronta para recomendar a bebida perfeita para cada paladar.</p>

              <p className={styles.textoMain}>Além de café, a STARPUGS oferece uma seleção tentadora de quitutes caseiros, como bolos, muffins e cookies, perfeitos para acompanhar sua bebida favorita. E se você estiver procurando por um presente especial para o seu amigo de quatro patas, a cafeteria também tem uma boutique com uma variedade de produtos exclusivos para cães, de brinquedos a acessórios de moda.</p>

              <p className={styles.textoMain}>Na STARPUGS, cada visita é uma celebração do amor pelos cães e pela boa companhia. Seja você um amante de café, um entusiasta canino ou ambos, este é o lugar onde você pode relaxar, socializar e desfrutar da alegria de estar na companhia de amigos peludos. Então, traga seu cachorro e venha se juntar a nós na STARPUGS - onde todos são bem-vindos, humanos e caninos!</p>
              </div>
              
              
      </div>
      
      
    </main>
    <section className={styles.container3img}>

<div className={styles.containerImgsTxt}>
    <div className={styles.primeiraimg}></div>
         <p className={styles.texto3ImgsDestaques}>O aroma do café e a companhia perfeita tornam cada momento aqui inesquecível.</p> 
  </div>

  <div className={styles.containerImgsTxt2}>
          <div className={styles.segundaimg}></div>
          <p className={styles.texto3ImgsDestaques}>Cada café é uma história, e aqui na nossa cafeteria, estamos prontos para escrever muitas delas juntos..</p>
  </div>

  <div className={styles.containerImgsTxt}>
          <div className={styles.terceiraimg}>

          </div>
          <p className={styles.texto3ImgsDestaques}>Café quente, sorrisos calorosos e conversas que alimentam a alma.</p>
  </div>
    </section>
    
  </div>
    
)
}