import styles from './itemslist.module.css';

export default function Page3() {
  return (
    <main className={styles.main}>
      <p className={styles.text}>Here are  some suggestions to furnish your apartment</p>

      <ItemsToPurchse />
      <Co2 />
      <ThirdPartyIntegration />
      <BuyAll />
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
    <div className="py-8 text-center my-8 rounded text-3xl" style={{backgroundColor: "#D3EED3", color: "#02592F"}}>
      <p>You will save 20kg of C02</p>
    </div>
  )
}

const ThirdPartyIntegration = () => (
  <div className="py-8 text-center my-8 rounded text-3xl" style={{backgroundColor: "#D3E8EE", color: "#536895"}}>
    <p>Paint suggestions for your rooms</p>
  </div>
)

const BuyAll = () => (
  <div className={styles.buyAllContainer}>
    <button className="">Buy all</button>
  </div>
)