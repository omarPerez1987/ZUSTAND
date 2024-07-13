import { useShallow } from 'zustand/react/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores/useBearsStore';

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBearCard />
        <PolarBearCard />
        <PandaBearCard />
        <DisplayBearsCard />
      </div>

    </>
  );
};

const BlackBearCard = () => {
  const blackBears = useBearStore((state) => state.blackBears)
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears)
  return (
    <WhiteCard centered>
      <h2>Osos Negros </h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}
const PolarBearCard = () => {
  const polarBears = useBearStore((state) => state.polarBears)
  const increasePolarBears = useBearStore((state) => state.increasePolarBears)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}
const PandaBearCard = () => {
  const pandaBears = useBearStore((state) => state.pandaBears)
  const increasePandaBears = useBearStore((state) => state.increasePandaBears)
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}

const DisplayBearsCard = () => {
  const bears = useBearStore(useShallow(state => state.bears))
  const addBears = useBearStore(state => state.addBear)
  const cleanBears = useBearStore(state => state.clearBears)

  return (
    <WhiteCard centered>
      <h2>Info Osos</h2>

      <div className="flex flex-col gap-2">
        <div className='flex flex-col gap-2 mt-4'>
          <button onClick={() => addBears()}> Agregar</button>
          <button onClick={() => cleanBears()}>Eliminar</button>
        </div>
        {bears && (
          bears.map((bear, index) => (
            <div key={index} className='flex py-2 my-2 border-indigo-600 justify-center border-2 rounded-xl'>
              <h3>Nombre: {bear.name}</h3>
            </div>
          ))
        )}
      </div>

    </WhiteCard>
  )
} 