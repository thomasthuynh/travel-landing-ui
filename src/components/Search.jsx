import React from "react";

import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="uppercase">Luxury Included Vacations for Two People</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            molestiae minima dolores unde similique cupiditate nobis
            consequuntur voluptatum ipsam quae quam rerum eaque corporis
            nesciunt itaque commodi expedita, porro culpa quibusdam, distinctio
            minus nulla! Nemo repellendus suscipit dignissimos. Est optio rem
            esse possimus natus aliquid, facilis libero dolor eos cum eveniet
            sit commodi itaque non quisquam aspernatur, laudantium quibusdam
            sunt nisi eaque vel recusandae. Doloremque, dicta! Repellat
            assumenda error fuga cupiditate, facere doloribus voluptates iusto
            illo distinctio nesciunt a explicabo nihil rerum inventore saepe
            aliquam, eos obcaecati maxime molestias eaque, quam nostrum. Quasi
            distinctio fugiat accusamus recusandae, laboriosam mollitia officia!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col items-center lg:flex-row text-center uppercase">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
              <h3 className="py-3">Leading Service</h3>
              <p>All Inclusive Company for 20 Years in a Row</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row text-center uppercase">
            <button>
              <FaAddressBook size={50}/>
            </button>
            <div>
              <h3 className="py-2">Automated Bookings</h3>
              <p>All Inclusive Company for 20 Years in a Row</p>
            </div>
          </div>
        </div>

      </div>

      <div className="col-span-2 lg:col-span-1">
        <div className="border text-center p-4 uppercase">
          <p>Get an additional 10% off</p>
          <p className="py-4">12 hours left</p>
          <p className="bg-gray-800 text-gray-200 py-2">Book now and save</p>
        </div>

        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>

          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <button className="w-full my-4">Rates and Availablities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
