import '../assets/base/grid-cols.css'
export default function Content({children, colums}){
  return(
    <section className={`col-${colums} container`}>
      {children}
    </section>
  )
}