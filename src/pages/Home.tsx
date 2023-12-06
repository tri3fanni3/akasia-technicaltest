import { useContext, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

// Context
import AppContext from "../context/Index";

// Interface
import { IPlanet } from "../interfaces/IPlanet";

const Home = () => {
  const context = useContext(AppContext);

  const [searchByName, setBySearch] = useState([]);

  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    let newArr;

    switch (name) {
      case "search-input":
        newArr = context?.starWarsPlanets.filter((i: IPlanet) => {
          const planetNameLowerCase = i.name.toLowerCase();
          const valueLowerCase = value.toLowerCase().substring(0, 2);

          return planetNameLowerCase.substring(0, 2).includes(valueLowerCase);
        });
        setBySearch(newArr as never);
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-center">
      {context?.isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <CHeader />
          <main className="mx-20 my-10 min-h-screen">
            <input
              type="text"
              name="search-input"
              className="mb-10 shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="search by name"
              onChange={onChangeFunction}
            />
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Rotation Period:</th>
                  <th>Orbital Period:</th>
                  <th>Climate:</th>
                  <th>Population:</th>
                  <th>Diameter:</th>
                </tr>
              </thead>
              {searchByName.length >= 1
                ? searchByName.map((p: IPlanet, index: number) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{p.name}</td>
                          <td>{p.rotation_period}</td>
                          <td>{p.orbital_period}</td>
                          <td>{p.climate}</td>
                          <td>{p.population}</td>
                          <td>{p.diameter}</td>
                        </tr>
                      </tbody>
                    );
                  })
                : context?.starWarsPlanets.map((p: IPlanet, index: number) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{p.name}</td>
                          <td>{p.rotation_period}</td>
                          <td>{p.orbital_period}</td>
                          <td>{p.climate}</td>
                          <td>{p.population}</td>
                          <td>{p.diameter}</td>
                        </tr>
                      </tbody>
                    );
                  })}
            </table>
          </main>
          <CFooter />
        </>
      )}
    </div>
  );
};

export default Home;
