import Heading from '../../partials/heading/heading'
import './consultations.scss'

const Consultations = () => {
  return (
    <section className="consultations" id="konsultacja-behawioralna">
      <div className="consultations__content">
        <div className="heading-container">
          <h2 className="font-[400] text-[48px] md:text-[56px]">
            Konsultacja behawioralna
          </h2>
          <img
            src="/icons/quali-line.svg"
            alt="Line"
            className="hidden lg:block ml-64 w-[300px]"
          />
        </div>
        <div className="consultations__text">
          <ol>
            <li>
              <div className="list-item">
                <span className="number text-center lg:text-left">1</span>
                <p className="text-center md:text-left">
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
                <span className="number text-center lg:text-left">2</span>
                <p className="text-center md:text-left">
                  Zbieram szczegółowy wywiad dotyczący kota, jego otoczenia,
                  aktywności, przyzwyczajeń, żywienia.
                </p>
              </div>{' '}
            </li>

            <li>
              <div className="list-item">
                <span className="number text-center lg:text-left">3</span>
                <p className="text-center md:text-left">
                  Obserwuję kota. Wspólnie z opiekunem próbujemy rozpoznać
                  przyczynę niepożądanego zachowania.
                </p>
              </div>
            </li>

            <li>
              <div className="list-item">
                <span className="number text-center lg:text-left">4</span>
                <p className="text-center md:text-left">
                  Ustalamy plan działania. Na tym etapie staram się informować o
                  rokowaniach oraz przewidywanym czasie potrzebnym na uzyskanie
                  postępów. 
                </p>
              </div>
            </li>

            <li>
              <div className="list-item">
                <span className="number text-center lg:text-left">5</span>
                <p className="text-center md:text-left">
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
