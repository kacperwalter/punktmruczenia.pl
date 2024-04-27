import Heading from '../../partials/heading/heading'
import './consultations.scss'

const Consultations = () => {
  return (
    <section className="consultations">
      <div className="consultations__content">
        <div className="heading-container">
          <Heading type="h3" text="Konsultacja behawioralna" />
          <img src="/icons/quali-line.svg" alt="Line" />
        </div>
        <div className="consultations__text">
          <ol>
            <li>
              <div className="list-item">
                <span className="number">1</span>
                <p>
                  Przed konsultacją proszę opiekuna o nakreślenie celu
                  konsultacji / przedstawienie problemu behawioralnego, który
                  będzie przedmiotem spotkania. Na tym etapie upewniam się,
                  kiedy kot miał wykonaną ogólną kontrolę zdrowia i podstawowe
                  badania krwi oraz moczu. Często proszę o wykonanie aktualnych
                  badań, aby wykluczyć podłoże somatyczne zaburzenia. 
                </p>
              </div>
            </li>

            <li>
              <div className="list-item">
                <span className="number">2</span>
                <p>
                  Zbieram szczegółowy wywiad dotyczący kota, jego otoczenia,
                  aktywności, przyzwyczajeń, żywienia.
                </p>
              </div>{' '}
            </li>

            <li>
              <div className="list-item">
                <span className="number">3</span>
                <p>
                  Obserwuję kota. Wspólnie z opiekunem próbujemy rozpoznać
                  przyczynę niepożądanego zachowania.
                </p>
              </div>
            </li>

            <li>
              <div className="list-item">
                <span className="number">4</span>
                <p>
                  Ustalamy plan działania. Na tym etapie staram się informować o
                  rokowaniach oraz przewidywanym czasie potrzebnym na uzyskanie
                  postępów. 
                </p>
              </div>
            </li>

            <li>
              <div className="list-item">
                <span className="number">5</span>
                <p>
                  Po konsultacji przesyłam pisemny raport z konsultacji z
                  zaleceniami dla opiekuna i kota.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Consultations
