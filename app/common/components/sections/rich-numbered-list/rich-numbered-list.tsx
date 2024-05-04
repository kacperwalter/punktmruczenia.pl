import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./rich-numbered-list.scss"

const RichNumberedList = () => {
  // TODO that should come from CMS
  const sections = [
    { text: 'Przed konsultacją proszę opiekuna o nakreślenie celu konsultacji / przedstawienie problemu behawioralnego, który będzie przedmiotem spotkania. Na tym etapie upewniam się, kiedy kot miał wykonaną ogólną kontrolę zdrowia i podstawowe badania krwi oraz moczu. Często proszę o wykonanie aktualnych badań, aby wykluczyć podłoże somatyczne zaburzenia.' },
    { text: 'Zbieram szczegółowy wywiad dotyczący kota, jego otoczenia, aktywności, przyzwyczajeń, żywienia.' },
    { text: 'Obserwuję kota. Wspólnie z opiekunem próbujemy rozpoznać przyczynę niepożądanego zachowania.' },
    { text: 'Ustalamy plan działania. Na tym etapie staram się informować o rokowaniach oraz przewidywanym czasie potrzebnym na uzyskanie postępów.' },
    { text: 'Po konsultacji przesyłam pisemny raport z konsultacji z zaleceniami dla opiekuna i kota.'},
  ]

  return (
    <section className="rich-numbered-list">
      <Wrapper>
        <Heading
          type="h2" // TODO CMS
          text="Konsultacja behawioralna" // TODO CMS
        />

        <div className="rich-numbered-list__list">
          {sections.map((section, index) => (
            // TODO maybe separate component when refactoring
            <article className="rich-numbered-list__element" key={index}>
              <Heading
                type="h3"
                text={(index + 1).toString()}
              />

              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default RichNumberedList