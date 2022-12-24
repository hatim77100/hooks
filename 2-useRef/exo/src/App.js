

import { useRef } from "react";
import "./App.css";
import UseReff from "./pages/useRef/UseReff";

// function App() {
//   const inputRef = useRef(null);
//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//    <div>
//     <input ref={inputRef} type="text" className="mr-15" />
//     <button onClick={handleClick} className='btn btn-primary'>focus input</button>
//    </div>
//   );
// }

// export default App;

function App() {
  const paraOneRef= useRef(null);
  const paraTwoRef= useRef(null);
  const paraThreeRef= useRef(null);
  console.log(paraThreeRef);
  function handleClickParaOne() {
    paraOneRef.current.scrollIntoView();
  }
  function handleClickParaTwo() {
    paraTwoRef.current.scrollIntoView({ behavior: 'smooth'});
  }
  function handleClickParaThree() {
    paraThreeRef.current.scrollIntoView();
  }

  return (
    <div>
      <button onClick={handleClickParaOne} className="btn btn-primary mr-15">
        1
      </button>
      <button onClick={handleClickParaTwo}   className="btn btn-primary mr-15">
        2
      </button>
      <button onClick={handleClickParaThree}  className="btn btn-primary">
        3
      </button>
      <p ref={paraOneRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis
        nihil dolores hic aspernatur veritatis porro magnam, necessitatibus
        laudantium adipisci autem officiis totam. Et ipsam neque, repudiandae
        nobis, at labore deleniti molestias officia distinctio, ullam eligendi
        sapiente velit expedita enim voluptates inventore esse? Odio numquam
        vitae impedit illo dicta amet hic aut quibusdam libero porro harum
        fugiat minus, eos voluptatum quae quis obcaecati architecto soluta
        asperiores dolorum magni quam dolore, ducimus sit. Accusantium molestiae
        veritatis quo odit dolor debitis nulla libero unde nisi quae, obcaecati
        dolorum similique sit dignissimos maxime quasi sunt explicabo mollitia
        quia perspiciatis vitae? Soluta facere doloribus culpa earum, molestiae
        labore laboriosam ad fuga iusto placeat voluptatem aspernatur deleniti
        vero, ipsum quaerat ab doloremque temporibus corporis nemo quod
        perferendis. Dolore, tempore, ad provident totam ratione ducimus, nemo
        optio error voluptates atque animi quos numquam harum nobis? Doloremque
        a in obcaecati odit dolore laudantium quas animi veniam reprehenderit
        consequuntur eaque amet libero delectus, quam distinctio, nisi et
        voluptatem ex nulla eos porro fuga ut officiis. Eum quibusdam corporis
        maxime accusamus laboriosam atque distinctio quisquam corrupti officiis
        ipsam, vel quasi fugiat. Voluptate fugit rerum dignissimos consequuntur
        alias dolor ipsa nisi exercitationem eos minus! Autem, neque inventore!
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        voluptatibus aliquid laboriosam eveniet corporis laborum aut quae dolor
        quisquam dicta at amet voluptates, assumenda et debitis eum rem sequi?
        Sed in totam magnam libero ab necessitatibus voluptates laborum? Ipsum,
        repudiandae. Quos quibusdam magnam aspernatur enim voluptates non ut
        recusandae sequi veniam mollitia natus tempore possimus corrupti quidem
        dignissimos itaque consequuntur aliquid, illo fugiat quae impedit maxime
        dolorem saepe. Doloribus possimus aperiam provident ab molestias officia
        maxime. Eveniet corporis mollitia ut assumenda asperiores eligendi
        aliquid maxime magni praesentium adipisci, quaerat nulla explicabo
        vitae impedit illo dicta amet hic aut quibusdam libero porro harum
        fugiat minus, eos voluptatum quae quis obcaecati architecto soluta
        asperiores dolorum magni quam dolore, ducimus sit. Accusantium molestiae
        veritatis quo odit dolor debitis nulla libero unde nisi quae, obcaecati
        dolorum similique sit dignissimos maxime quasi sunt explicabo mollitia
        quia perspiciatis vitae? Soluta facere doloribus culpa earum, molestiae
        labore laboriosam ad fuga iusto placeat voluptatem aspernatur deleniti
        vero, ipsum quaerat ab doloremque temporibus corporis nemo quod
        perferendis. Dolore, tempore, ad provident totam ratione ducimus, nemo
        optio error voluptates atque animi quos numquam harum nobis? Doloremque
        a in obcaecati odit dolore laudantium quas animi veniam reprehenderit
        consequuntur eaque amet libero delectus, quam distinctio, nisi et
        voluptatem ex nulla eos porro fuga ut officiis. Eum quibusdam corporis
        maxime accusamus laboriosam atque distinctio quisquam corrupti officiis
        ipsam, vel quasi fugiat. Voluptate fugit rerum dignissimos consequuntur
        alias dolor ipsa nisi exercitationem eos minus! Autem, neque inventore!
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        voluptatibus aliquid laboriosam eveniet corporis laborum aut quae dolor
        quisquam dicta at amet voluptates, assumenda et debitis eum rem sequi?
        Sed in totam magnam libero ab necessitatibus voluptates laborum? Ipsum,
        repudiandae. Quos quibusdam magnam aspernatur enim voluptates non ut
        recusandae sequi veniam mollitia natus tempore possimus corrupti quidem
        dignissimos itaque consequuntur aliquid, illo fugiat quae impedit maxime
        dolorem saepe. Doloribus possimus aperiam provident ab molestias officia
        maxime. Eveniet corporis mollitia ut assumenda asperiores eligendi
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        voluptatibus aliquid laboriosam eveniet corporis laborum aut quae dolor
        quisquam dicta at amet voluptates, assumenda et debitis eum rem sequi?
        Sed in totam magnam libero ab necessitatibus voluptates laborum? Ipsum,
        repudiandae. Quos quibusdam magnam aspernatur enim voluptates non ut
        recusandae sequi veniam mollitia natus tempore possimus corrupti quidem
        dignissimos itaque consequuntur aliquid, illo fugiat quae impedit maxime
        dolorem saepe. Doloribus possimus aperiam provident ab molestias officia
        maxime. Eveniet corporis mollitia ut assumenda asperiores eligendi
        aliquid maxime magni praesentium adipisci, quaerat nulla explicabo
        vitae impedit illo dicta amet hic aut quibusdam libero porro harum
        fugiat minus, eos voluptatum quae quis obcaecati architecto soluta
        asperiores dolorum magni quam dolore, ducimus sit. Accusantium molestiae
        veritatis quo odit dolor debitis nulla libero unde nisi quae, obcaecati
        dolorum similique sit dignissimos maxime quasi sunt explicabo mollitia
        quia perspiciatis vitae? Soluta facere doloribus culpa earum, molestiae
        labore laboriosam ad fuga iusto placeat voluptatem aspernatur deleniti
        vero, ipsum quaerat ab doloremque temporibus corporis nemo quod
        perferendis. Dolore, tempore, ad provident totam ratione ducimus, nemo
        optio error voluptates atque animi quos numquam harum nobis? Doloremque
        a in obcaecati odit dolore laudantium quas animi veniam reprehenderit
        consequuntur eaque amet libero delectus, quam distinctio, nisi et
        voluptatem ex nulla eos porro fuga ut officiis. Eum quibusdam corporis
        maxime accusamus laboriosam atque distinctio quisquam corrupti officiis
        ipsam, vel quasi fugiat. Voluptate fugit rerum dignissimos consequuntur
        alias dolor ipsa nisi exercitationem eos minus! Autem, neque inventore!
        Temporibus modi ipsa quis ipsam, animi fugiat magnam incidunt
        voluptatibus aliquid laboriosam eveniet corporis laborum aut quae dolor
        quisquam dicta at amet voluptates, assumenda et debitis eum rem sequi?
        Sed in totam magnam libero ab necessitatibus voluptates laborum? Ipsum,
        repudiandae. Quos quibusdam magnam aspernatur enim voluptates non ut
        recusandae sequi veniam mollitia natus tempore possimus corrupti quidem
        dignissimos itaque consequuntur aliquid, illo fugiat quae impedit maxime
        dolorem saepe. Doloribus possimus aperiam provident ab molestias officia
        maxime. Eveniet corporis mollitia ut assumenda asperiores eligendi
        aliquid maxime magni praesentium adipisci, quaerat nulla explicabo
      </p>
      <p ref={paraTwoRef}>
        voluptatum consectetur dolores dolore veritatis totam temporibus culpa
        similique excepturi reprehenderit fugit officiis illum. Repellat
        cupiditate natus maiores quos reiciendis quisquam optio facere delectus
        a voluptatem modi, vero illo, hic earum fuga eum voluptatum. Quas
        dolorum eum quos reprehenderit magnam animi, ut aperiam sapiente eos,
        sed ipsum laudantium corporis impedit modi odit aliquid ratione
        distinctio eligendi. Dolorum excepturi sequi odit libero harum? Facere
        soluta asperiores vel cupiditate hic voluptates animi eligendi maxime?
        Impedit pariatur ratione odit doloremque facere eius similique dolorum
        fuga amet voluptatem? Exercitationem praesentium ex atque necessitatibus
        sit veniam ipsam autem mollitia ab? Explicabo temporibus assumenda totam
        veritatis laboriosam dignissimos odit illum quos autem velit eveniet
        cupiditate, voluptatem eius possimus rem reprehenderit? Laborum
        doloremque eaque ratione quam distinctio dolore praesentium corrupti
        eius accusantium debitis placeat, asperiores culpa aperiam blanditiis
        fuga! Illo velit ut ducimus pariatur aperiam, vero mollitia, molestiae
        iure saepe fugit adipisci odio impedit voluptatem architecto, rerum
        labore quia deleniti veniam! Officiis nostrum delectus porro voluptas
        molestias qui est, earum error. Cumque ipsa, voluptas doloremque enim
        architecto, delectus mollitia commodi est illum, veritatis asperiores
        esse voluptate culpa expedita dignissimos aliquid? Perspiciatis fuga ex
        repellendus cum illum maxime. Provident saepe ad placeat ipsa reiciendis
        consectetur ullam vero! Hic dolorum non, sint maiores aliquid error
        obcaecati! Dolor sapiente magnam quas doloribus quos pariatur nobis iste
        unde, consectetur magni esse? Similique quam nulla sed iste qui
        suscipit, illo voluptate quos error placeat tempore cupiditate sequi
        repellat, blanditiis iure ut necessitatibus, quia officiis voluptatibus
        quisquam doloribus sapiente aliquid excepturi. Accusamus architecto
        excepturi eos ipsam nostrum assumenda cum quos dolorem. Atque eligendi
        consequuntur quisquam laborum velit, deserunt ut, reiciendis qui
        dolorum eum quos reprehenderit magnam animi, ut aperiam sapiente eos,
        sed ipsum laudantium corporis impedit modi odit aliquid ratione
        distinctio eligendi. Dolorum excepturi sequi odit libero harum? Facere
        soluta asperiores vel cupiditate hic voluptates animi eligendi maxime?
        Impedit pariatur ratione odit doloremque facere eius similique dolorum
        fuga amet voluptatem? Exercitationem praesentium ex atque necessitatibus
        sit veniam ipsam autem mollitia ab? Explicabo temporibus assumenda totam
        veritatis laboriosam dignissimos odit illum quos autem velit eveniet
        cupiditate, voluptatem eius possimus rem reprehenderit? Laborum
        doloremque eaque ratione quam distinctio dolore praesentium corrupti
        eius accusantium debitis placeat, asperiores culpa aperiam blanditiis
        fuga! Illo velit ut ducimus pariatur aperiam, vero mollitia, molestiae
        iure saepe fugit adipisci odio impedit voluptatem architecto, rerum
        repellendus cum illum maxime. Provident saepe ad placeat ipsa reiciendis
        consectetur ullam vero! Hic dolorum non, sint maiores aliquid error
        obcaecati! Dolor sapiente magnam quas doloribus quos pariatur nobis iste
        unde, consectetur magni esse? Similique quam nulla sed iste qui
        suscipit, illo voluptate quos error placeat tempore cupiditate sequi
        repellat, blanditiis iure ut necessitatibus, quia officiis voluptatibus
        quisquam doloribus sapiente aliquid excepturi. Accusamus architecto
        excepturi eos ipsam nostrum assumenda cum quos dolorem. Atque eligendi
        consequuntur quisquam laborum velit, deserunt ut, reiciendis qui
        dolorum eum quos reprehenderit magnam animi, ut aperiam sapiente eos,
        sed ipsum laudantium corporis impedit modi odit aliquid ratione
        distinctio eligendi. Dolorum excepturi sequi odit libero harum? Facere
        soluta asperiores vel cupiditate hic voluptates animi eligendi maxime?
        Impedit pariatur ratione odit doloremque facere eius similique dolorum
        fuga amet voluptatem? Exercitationem praesentium ex atque necessitatibus
        sit veniam ipsam autem mollitia ab? Explicabo temporibus assumenda totam
        veritatis laboriosam dignissimos odit illum quos autem velit eveniet
        cupiditate, voluptatem eius possimus rem reprehenderit? Laborum
        doloremque eaque ratione quam distinctio dolore praesentium corrupti
        eius accusantium debitis placeat, asperiores culpa aperiam blanditiis
        fuga! Illo velit ut ducimus pariatur aperiam, vero mollitia, molestiae
        iure saepe fugit adipisci odio impedit voluptatem architecto, rerum
        labore quia deleniti veniam! Officiis nostrum delectus porro voluptas
        molestias qui est, earum error. Cumque ipsa, voluptas doloremque enim
        architecto, delectus mollitia commodi est illum, veritatis asperiores
        esse voluptate culpa expedita dignissimos aliquid? Perspiciatis fuga ex
        repellendus cum illum maxime. Provident saepe ad placeat ipsa reiciendis
        consectetur ullam vero! Hic dolorum non, sint maiores aliquid error
        obcaecati! Dolor sapiente magnam quas doloribus quos pariatur nobis iste
        unde, consectetur magni esse? Similique quam nulla sed iste qui
        suscipit, illo voluptate quos error placeat tempore cupiditate sequi
        repellat, blanditiis iure ut necessitatibus, quia officiis voluptatibus
        quisquam doloribus sapiente aliquid excepturi. Accusamus architecto
        excepturi eos ipsam nostrum assumenda cum quos dolorem. Atque eligendi
        consequuntur quisquam laborum velit, deserunt ut, reiciendis qui
        explicabo blanditiis error dignissimos suscipit, dolore natus.
        Exercitationem praesentium magni dolore quam! Eos velit consequuntur at
        eaque nulla cum facilis odit illo dolores aperiam rerum voluptas ducimus
        exercitationem fugiat quae vero molestias numquam, accusamus quaerat
        error pariatur delectus consectetur odio. Suscipit, atque eligendi
        officia animi labore eius placeat commodi consectetur minus natus iusto
        deserunt quod, exercitationem explicabo at enim repellat magni
        aspernatur maxime, nobis in reiciendis! Consectetur, est? Architecto
        dolor sed aut ut voluptas! Possimus iure culpa esse adipisci harum
        nostrum ut suscipit obcaecati eligendi ex nisi nihil labore animi illum,
        repudiandae ipsam minima autem. Perferendis reiciendis placeat iure et
        doloribus minima facere esse veritatis dolor temporibus facilis eius
        nisi, excepturi assumenda quo enim, tempore sunt blanditiis quibusdam
        sit illum repudiandae ipsa quas odio. Rerum quod praesentium
      </p>
      <p ref={paraThreeRef}>
        consequuntur officia veniam cumque in est unde? Sit iure cum assumenda
        fugit rem quod! Vero iste doloribus ipsa amet impedit iure ea eligendi
        maiores libero dolorem minus nemo autem quibusdam porro reiciendis
        adipisci culpa sequi sit possimus, architecto pariatur. Autem sunt
        voluptatem enim nihil ab. Assumenda, aliquid! Pariatur, corrupti libero,
        iusto doloremque odio laboriosam quam cum id aliquid quos earum alias
        perferendis cupiditate ab et vel provident at necessitatibus! Facilis
        libero sed illo repellendus veritatis officiis incidunt officia vel
        tempore iure aut voluptate quo saepe dolorem, possimus sequi molestiae,
        dignissimos ratione quaerat minima vitae voluptatum suscipit! Modi
        assumenda minima autem quod minus delectus fugit alias consequuntur
        eaque velit exercitationem officiis repellendus impedit iure sunt unde
        illum corporis veniam tenetur, porro eos accusantium voluptas quos?
        Officiis magnam aut nemo deleniti odit voluptas reprehenderit eum,
        reiciendis mollitia corrupti. Porro totam ratione quo quis dolorem
        facilis inventore odit, nobis praesentium minima dolorum iure dolores
        tempore voluptatum et laudantium laborum nulla labore delectus neque
        magni omnis ad expedita quibusdam? Exercitationem, fuga temporibus
        deleniti numquam esse odit quo voluptatem quae fugiat error eius
        facilis, cum officia officiis ab dolor obcaecati placeat. Est,
        aspernatur ex assumenda officia dolor aliquid ullam aut asperiores
        temporibus, fugiat nisi maxime, tenetur soluta quo alias odio veritatis
        explicabo nostrum quia architecto repellat consequuntur odit illo.
        Officia unde laboriosam molestias neque amet, animi fuga explicabo
        corporis nemo deserunt voluptas sit facilis id porro nisi tenetur omnis
        blanditiis commodi ducimus. Ad mollitia ipsa quia recusandae, odit
        voluptatibus blanditiis iure debitis necessitatibus beatae voluptatem
        sequi? Reiciendis vel, quos enim nobis aperiam accusantium. Quibusdam
        rerum molestiae mollitia dolore sed, porro distinctio delectus nemo,
        voluptatem illum iusto sit neque! Iure, vitae dicta recusandae maiores
        soluta nihil laborum modi earum, ex magni excepturi facere? Itaque
        temporibus, facilis delectus distinctio dolorem ipsa ipsam quas numquam
        rem beatae a totam voluptatem hic sunt alias excepturi mollitia ea
        debitis et culpa! Cupiditate laborum sed repellat ipsum neque voluptas
        dolorum vero nesciunt cum mollitia officiis odio a placeat incidunt
        veritatis nostrum eligendi expedita, voluptate architecto ad corrupti
        itaque ducimus ipsam illum. Possimus modi non quidem consectetur
        cupiditate repellat tempore voluptatibus? Ad illo deserunt, blanditiis
        accusamus esse, illum vero, nesciunt quibusdam temporibus maiores
        cupiditate numquam maxime ipsa libero quod laboriosam tempora nihil
        exercitationem quae repudiandae beatae. Inventore corporis praesentium
        tempora doloremque nemo, repudiandae quidem, voluptatibus ad numquam
        provident dolorum neque sequi consequatur possimus nulla rem rerum optio
        asperiores deleniti illum laborum eius repellendus. Facilis pariatur
        quaerat labore odio repellendus? Autem explicabo, recusandae aliquam
        quibusdam similique sint exercitationem quasi quisquam hic laborum
        corrupti, a vero veritatis consectetur? Sequi voluptatibus expedita
        repellendus ipsa! Ad quis commodi laborum id quod accusamus, quo error
        harum nemo consequatur? Fugit deleniti mollitia placeat adipisci sed
        animi, obcaecati dolor minus ut doloribus et ab quas asperiores
        accusamus voluptates exercitationem deserunt voluptatibus! Molestiae
        reprehenderit sapiente nisi atque vitae exercitationem maxime
        praesentium aliquid quia dolores sed vero necessitatibus reiciendis
        dolorum eum, suscipit, ratione odio. Cum, eum perferendis eveniet animi
        impedit dolore commodi, et qui, illum voluptatem praesentium aut numquam
        sunt pariatur. Adipisci aspernatur ducimus officiis, quos saepe
        provident dolorem pariatur nihil, explicabo delectus rerum in eum sit
        ipsum corporis nisi, dolor illum fugiat maxime optio architecto
        temporibus harum ullam vel. Quia, quos. Itaque, facilis? Sunt, nesciunt
        placeat nobis atque laboriosam explicabo facilis repudiandae, quae
        officiis, reiciendis incidunt consectetur accusamus quos dolore tenetur
        sapiente dolorum. Voluptas dolores, accusantium quisquam corporis itaque
        nesciunt. A sunt delectus ipsa eaque libero. Incidunt dolor voluptate
        voluptatibus molestiae facere velit libero id quod debitis beatae saepe
        et suscipit magni modi ea iusto tempore, eos corrupti totam, est
        adipisci aliquam non exercitationem aut. Perspiciatis quibusdam adipisci
        voluptatem doloremque! Autem est dicta cupiditate esse voluptatibus
        dolorem ipsum reprehenderit dignissimos rerum? Eaque vel fugit numquam
        neque. Dicta vero animi eveniet reprehenderit accusamus nam repellat
        vitae ipsam corrupti soluta itaque quod voluptate minus veritatis id ut
        libero adipisci, blanditiis praesentium odit tempora nemo consequuntur
        quibusdam. At deserunt id magnam culpa modi? Aperiam cum atque error
        tempore nostrum qui nihil repudiandae, nemo quidem quo, natus accusamus
        doloribus dicta voluptate eum sint. Porro laboriosam rem iusto tenetur
        ut nam, eligendi qui, exercitationem mollitia quis quisquam veritatis
        magni accusamus hic quibusdam eius possimus. Alias eos temporibus ad
        consectetur quibusdam reprehenderit, eaque totam quae amet cupiditate
        suscipit expedita doloribus dolorem ipsa in velit dolores delectus
        veniam ipsam cum inventore tempore fugiat qui? Officia optio excepturi
        consequuntur ex voluptatum, obcaecati ipsa accusamus quas sit labore
        possimus. Aspernatur, laudantium, optio perspiciatis consequatur aut
        commodi distinctio, provident fuga recusandae magni illum nobis
        similique voluptates! Perferendis, voluptatum labore, officiis iste et
        voluptas nihil non asperiores eveniet blanditiis velit neque natus
        pariatur rem doloribus mollitia? Dicta rerum maiores, corrupti esse
        magnam cumque, nam inventore, repellendus assumenda alias nostrum
        praesentium laboriosam. Praesentium culpa doloremque voluptatibus dolore
        nobis molestiae corrupti asperiores quod nulla libero ut animi incidunt
        provident, quam quisquam a quis quia alias est placeat rem magnam
        veritatis laborum obcaecati. Voluptatum illum, commodi doloribus dicta
        dolore laudantium corrupti. quibusdam similique sint exercitationem
        quasi quisquam hic laborum corrupti, a vero veritatis consectetur? Sequi
        voluptatibus expedita repellendus ipsa! Ad quis commodi laborum id quod
        accusamus, quo error harum nemo consequatur? Fugit deleniti mollitia
        placeat adipisci sed animi, obcaecati dolor minus ut doloribus et ab
        quas asperiores accusamus voluptates exercitationem deserunt
        voluptatibus! Molestiae reprehenderit sapiente nisi atque vitae
        exercitationem maxime praesentium aliquid quia dolores sed vero
        necessitatibus reiciendis dolorum eum, suscipit, ratione odio. Cum, eum
        perferendis eveniet animi impedit dolore commodi, et qui, illum
        voluptatem praesentium aut numquam sunt pariatur. Adipisci aspernatur
        ducimus officiis, quos saepe provident dolorem pariatur nihil, explicabo
        delectus rerum in eum sit ipsum corporis nisi, dolor illum fugiat maxime
        optio architecto temporibus harum ullam vel. Quia, quos. Itaque,
        facilis? Sunt, nesciunt placeat nobis atque laboriosam explicabo facilis
        repudiandae, quae officiis, reiciendis incidunt consectetur accusamus
        quos dolore tenetur sapiente dolorum. Voluptas dolores, accusantium
        quisquam corporis itaque nesciunt. A sunt delectus ipsa eaque libero.
        Incidunt dolor voluptate voluptatibus molestiae facere velit libero id
        quod debitis beatae saepe et suscipit magni modi ea iusto tempore, eos
        corrupti totam, est adipisci aliquam non exercitationem aut.
        Perspiciatis quibusdam adipisci voluptatem doloremque! Autem est dicta
        cupiditate esse voluptatibus dolorem ipsum reprehenderit dignissimos
        rerum? Eaque vel fugit numquam neque. Dicta vero animi eveniet
        reprehenderit accusamus nam repellat vitae ipsam corrupti soluta itaque
        quod voluptate minus veritatis id ut libero adipisci, blanditiis
        praesentium odit tempora nemo consequuntur quibusdam. At deserunt id
        magnam culpa modi? Aperiam cum atque error tempore nostrum qui nihil
        repudiandae, nemo quidem quo, natus accusamus doloribus dicta voluptate
        eum sint. Porro laboriosam rem iusto tenetur ut nam, eligendi qui,
        exercitationem mollitia quis quisquam veritatis magni accusamus hic
        quibusdam eius possimus. Alias eos temporibus ad consectetur quibusdam
        reprehenderit, eaque totam quae amet cupiditate suscipit expedita
        doloribus dolorem ipsa in velit dolores delectus veniam ipsam cum
        inventore tempore fugiat qui? Officia optio excepturi consequuntur ex
        voluptatum, obcaecati ipsa accusamus quas sit labore possimus.
        Aspernatur, laudantium, optio perspiciatis consequatur aut commodi
        distinctio, provident fuga recusandae magni illum nobis similique
        voluptates! Perferendis, voluptatum labore, officiis iste et voluptas
        nihil non asperiores eveniet blanditiis velit neque natus pariatur rem
        doloribus mollitia? Dicta rerum maiores, corrupti esse magnam cumque,
        nam inventore, repellendus assumenda alias nostrum praesentium
        laboriosam. Praesentium culpa doloremque voluptatibus dolore nobis
        molestiae corrupti asperiores quod nulla libero ut animi incidunt
        provident, quam quisquam a quis quia alias est placeat rem magnam
        veritatis laborum obcaecati. Voluptatum illum, commodi doloribus dicta
        dolore laudantium corrupti.
      </p>
      <UseReff/>
    </div>
  );
}

export default App;
