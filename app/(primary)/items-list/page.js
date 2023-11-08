import styles from './itemslist.module.css';

export default function Page3() {
  return (
    <main className={styles.main}>
      <p className={styles.text}>Here are  some suggestions to furnish your apartment</p>

      <ItemsToPurchse />
      <Co2 />
      <ThirdPartyIntegration />
    </main>
  )
}

const itemsList = [
  {
    name: "Bed",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/t9psw1m57flw4lyyfrga",
  },
  {
    name: "Night stand",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/bpj0loc62ecxh8n9ylc0",
  },
  {
    name: "Night stand lamp",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/sdlvi2ar5rrsjt0bjp2z",
  },
  {
    name: "Ceiling lamp",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/swinmp2raahrokbbekuo",
  },
  {
    name: "Photo frame",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/bpj0loc62ecxh8n9ylc0",
  },
  {
    name: "Wall art",
    img:"https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/vazds6vuqmenekttsfyu",
  },
]

const ItemsToPurchse = function() {
  return (
    <div className={styles.itemsToPurchaseList}>
      {itemsList.map((item ) => (
        <ItemToPurchase key={item}>{item}</ItemToPurchase>
      ) )}
    </div>
  )
}

const ItemToPurchase = function({ children }) {
  return (
    <div className={styles.itemToPurchase} style={{ backgroundImage: "url:" + children.img }}>
      <img src={children.img} alt={children.name} className={styles.itemImage} />
      <div className={styles.itemTextContainer}>
        <p className={styles.itemText}>{children.name}</p>
      </div>
      </div>
  )
}

const Co2 = function () {
  return (
    <div className={styles.co2Style}>
      <p>You will save 20kg of C02</p>
    </div>
  )
}

const ThirdPartyIntegration = () => (
  <div className={styles.thirdPartyIntegration}>
    <p>Paint suggestions for your rooms</p>
  </div>
)