import { format } from "date-fns";

const AdminStats = ({ data }) => {
  return (
    <div className="mt-[20px] flex w-full justify-between">
      <div className="shadow-mainColor/20 flex min-w-[250px] items-center justify-center space-x-[40px] rounded-2xl border py-[10px] px-[30px] shadow-xl">
        <div className="relative">
          <h5 className="flex flex-col text-2xl font-bold text-mainColor">
            <span className="text-center">
              Batch {data?.currentBatch?.batch || "No Batch"}
            </span>
            <span className="text-center text-xs text-gray-800">
              {data?.currentBatch &&
                format(new Date(data?.currentBatch?.startDate), "dd-MM-yyyy")}
            </span>
          </h5>
          <h6 className="text-xs text-brandText">Current Batch</h6>
        </div>
        <svg
          className="h-[35px] w-[35px] text-brandText"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
        >
          <g>
            <path d="M990,500.3c0-17.1-8.2-30-24.5-38.5l-98.8-47.1l98.8-47.1c16.3-8.6,24.5-21.4,24.5-38.6c0-17.1-8.2-30-24.5-38.6L516.3,76.2c-9.6-4.6-16.3-8.2-32.7,0L34.5,290.4C18.2,299,10,311.8,10,329c0,17.1,8.2,30,24.5,38.6l98.8,47.1l-98.8,47.1C18.2,470.3,10,483.2,10,500.3c0,17.1,8.2,30,24.5,38.6l98.8,47.1l-98.8,47.1C18.2,641.7,10,654.5,10,671.6c0,17.1,8.2,30,24.5,38.6l449.2,214.2c6.6,3.4,12.3,4.3,16.3,4.3c4.1,0,8.1-0.5,16.3-4.3l449.2-214.2c16.3-8.6,24.5-21.4,24.5-38.6c0-17.1-8.2-30-24.5-38.6L866.7,586l98.8-47.1C981.8,530.3,990,517.4,990,500.3z M500,161.9L851.2,329L500,496L148.8,329L500,161.9z M483.7,581.7c6.7,3.5,12.3,4.3,16.3,4.3c4.1,0,10.2-1.7,16.3-4.3L769.4,461l81.7,39.3L500,667.4L148.8,500.3l81.7-39.3L483.7,581.7z M851.2,671.6L500,838.7L148.8,671.6l81.7-39.3L483.7,753c5.8,2.7,12.3,4.3,16.3,4.3c4.1,0,9.1-0.7,16.3-4.3l253.1-120.7L851.2,671.6z" />
          </g>
        </svg>
      </div>
      <div className="shadow-mainColor/20 flex min-w-[250px] items-center justify-between space-x-[40px] rounded-2xl border p-[30px] shadow-xl">
        <div>
          <h5 className="text-center text-2xl font-bold text-mainColor">
            {data?.totalKG || 0}
          </h5>
          <h6 className="text-xs text-brandText">Total Weight (KG)</h6>
        </div>
        <svg
          className="h-[40px] w-[40px] text-brandText"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
        >
          <g>
            <path d="M593.7,835.5c-8.9-6.8-17.4-12.1-24.7-16.9c-5.4-3.6-10.1-6.9-14-10.2c-5.8-4.9-9.6-9.3-12.5-15.1c-1.5-2.9-2.7-6.3-3.6-10.6c-0.9-4.3-1.5-9.4-1.5-15.7v-9.7h-61.9v9.7c0,17,2.9,32.2,8.6,45.3c4.2,9.8,9.9,18.4,16.2,25.6c9.5,10.8,20,18.5,29.4,24.9c9.4,6.4,17.8,11.5,24.4,16.6l0,0c0.1,0.1,1.1,1.1,1.9,3.3c0.8,2.1,1.5,5.3,1.5,8.9c0,4.2-0.9,8.9-2.8,13.5c-2.9,6.8-7.8,13.1-15.8,18.2c-4.1,2.6-9,4.8-15.3,6.6c-5.8,1.6-12.8,2.7-21,3.1c-13.1-1.5-21.5-5.1-28.1-9.5c-5.2-3.5-9.3-7.8-12.6-12.5c-5-7-8.2-15.1-9.9-21.3c-0.8-3.1-1.3-5.6-1.6-7.3c-0.1-0.8-0.2-1.4-0.2-1.7l0-0.2h0c-1.2-15.6-15.8-27.4-32.8-26.4c-17.1,1-30,14.5-29,30.2c0.1,1.2,0.5,7.1,2.7,15.8c1.6,6.6,4.1,14.7,8.3,23.6c3.1,6.7,7.2,13.8,12.5,20.9c8,10.6,18.9,21.2,33.5,29.5c14.6,8.3,32.6,14.1,53.2,15.9l1.9,0.2l1.9,0c18.8-0.5,35.9-3.7,50.8-9.4c11.2-4.3,21.1-9.9,29.5-16.5c12.7-9.9,21.9-21.9,27.9-34.4c6-12.5,8.8-25.5,8.8-38.1c0-10.3-1.9-20.5-5.9-30C609.5,851.9,603.2,842.8,593.7,835.5z" />
            <path d="M758.2,316.2c-21.3-46.4-56.8-85.8-101.5-113.6c-44.7-27.8-98.8-44.1-156.7-44.1c-38.6,0-75.6,7.2-109.1,20.3c-50.3,19.6-93.1,52.3-123.3,93.5c-30.2,41.2-47.9,91.1-47.9,144.5c0,35.6,7.8,69.6,22,100.6c18.4,40.1,47.4,74.9,83.7,101.6l21.8,91.2c1.8,7.7,10.3,13.9,18.8,13.9h284c8.5,0,17-6.3,18.8-13.9l25.8-107.7c14-12.5,26.6-26.3,37.6-41.3c30.2-41.2,47.9-91.1,47.9-144.4C780.3,381.2,772.4,347.1,758.2,316.2z M687,489.6c-15.4,33.5-41.2,62.1-73.6,82.3C581,592,542.2,603.8,500,603.8c-28.1,0-54.7-5.2-79-14.7c-36.4-14.2-67.4-37.9-89.3-67.8c-21.9-29.9-34.6-65.7-34.6-104.5c0-25.9,5.7-50.4,15.9-72.8c15.4-33.5,41.1-62.2,73.6-82.3c32.4-20.2,71.3-31.9,113.4-31.9c28.1,0,54.7,5.2,79,14.7c36.4,14.2,67.4,37.9,89.3,67.8c21.9,29.9,34.6,65.7,34.6,104.5C702.9,442.7,697.2,467.2,687,489.6z" />
            <path d="M487.2,356.8c-40.3-66.6-70-87-70-87s1.1,34.2,37,102.9C463.2,364.8,474.6,359.1,487.2,356.8z" />
            <path d="M466.3,416.8c0.3-16.8,15.4-30.1,33.6-29.8c18.2,0.3,32.7,14.2,32.3,30.9c-0.3,16.8-15.4,30.1-33.5,29.8c-17.7-0.3-32-13.5-32.3-29.8V416.8z" />
            <path d="M278.7,208.4c18.8-17,39.8-31.7,62.6-43.9l0,0l-16.1-29.4c0,0-6.1-16.6,9.4-22.8c57.6-30.5,171.7-31,171.7-31s114.1,0.5,171.7,31c15.5,6.2,9.4,22.8,9.4,22.8l-16.1,29.4l-3,5.4c2.9,1.7,5.8,3.4,8.6,5.2c19.3,12,37,25.9,52.9,41.3l4.1-8l28.9-52.8c0,0,28.8-68-46-105C642.6,17.2,574.1,10,506.3,10c-67.8,0-136.3,7.2-210.5,40.6c-74.8,36.9-46,105-46,105L278.7,208.4z" />
          </g>
        </svg>
      </div>
      <div className="shadow-mainColor/20 flex min-w-[250px] items-center justify-between space-x-[40px] rounded-2xl border p-[30px] shadow-xl">
        <div>
          <h5 className="text-center text-2xl font-bold text-mainColor">
            {data?.totalShipments || 0}
          </h5>
          <h6 className="text-xs text-brandText">Total Shipments</h6>
        </div>
        <svg
          className="h-[40px] w-[40px] text-brandText"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
        >
          <g>
            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
              <path d="M3442.2,4266.9c-175.5-34.7-379.5-108.1-512.1-185.7c-165.3-93.9-395.8-344.8-483.6-522.3c-128.5-261.2-157.1-416.2-171.4-932.5l-12.2-453l-53.1-26.5c-97.9-46.9-130.6-318.3-73.5-595.8c38.8-183.6,206.1-520.3,326.5-657c65.3-75.5,104.1-144.9,134.7-244.8c55.1-177.5,140.8-348.9,257.1-512.1c51-71.4,83.6-136.7,75.5-146.9c-46.9-44.9-497.9-279.5-799.8-416.3c-187.7-83.6-495.8-222.4-687.6-308.1c-510.1-230.6-650.9-332.6-840.6-614.2c-251-369.3-446.8-948.8-489.7-1444.6l-12.2-153l79.6-79.6c93.9-93.9,220.4-144.9,538.7-216.3c293.8-65.3,1128.3-185.7,1560.9-226.5c703.9-65.3,1771.1-91.8,2250.5-59.2l187.7,14.3l4.1,1369.1l6.1,1369.1l805.9,6.1l806,4.1l-448.9,200C5460.1-371,4996.9-144.5,4835.7-44.5l-77.5,44.9l91.8,122.4c106.1,142.8,214.2,357.1,267.3,530.5c22.4,75.5,67.3,157.1,116.3,214.2c255.1,295.9,399.9,714.1,361.2,1052.8c-16.3,157.1-46.9,232.6-91.8,232.6c-57.1,0-67.3,75.5-77.5,530.5c-10.2,506-24.5,593.8-146.9,846.8c-173.4,357.1-453,585.6-867.2,703.9C4215.5,4291.3,3664.6,4309.7,3442.2,4266.9z" />
              <path d="M5003.1-2080.8v-1030.4h1601.7h1601.7v-102v-102H7176.1c-567.2,0-1030.4-4.1-1030.4-10.2c0-4.1,22.4-42.8,51-83.7c26.5-40.8,55.1-106.1,63.2-149c6.1-40.8,14.3-85.7,18.4-97.9c8.2-20.4,218.3-26.5,967.2-26.5h956.9l12.3,89.8c36.7,236.7,273.4,436.6,524.4,440.7c263.2,2,489.7-189.8,538.7-455l14.3-75.5h304h304v581.5v583.5l-291.8,457.1l-289.7,459.1l-550.9-4.1l-550.9-6.1l-6.1-677.4l-4.1-679.4h-112.2H7982v959v959H6492.5H5003.1V-2080.8z M9447-2137.9c114.3-183.6,208.1-353,208.1-377.5v-44.9h-632.5h-632.5v377.5v377.5h424.4h422.4L9447-2137.9z" />
              <path d="M5647.8-3317.3c-153-34.7-263.2-157.1-289.8-318.3c-16.3-106.1,18.4-212.2,100-306.1c218.3-246.9,620.3-118.3,659,212.2C6149.8-3468.3,5909-3258.1,5647.8-3317.3z" />
              <path d="M8665.6-3315.2c-89.8-20.4-140.8-51-210.2-132.6c-77.5-87.7-93.9-140.8-81.6-285.7c20.4-251,283.6-404,520.3-306.1c42.9,18.4,93.9,46.9,114.3,67.3c102,91.8,144.9,291.8,93.9,426.4C9041-3382.6,8841-3276.5,8665.6-3315.2z" />
              <path d="M5003.1-3498.9v-183.6h102c93.9,0,102,4.1,102,49c0,71.4,40.8,177.5,95.9,253l49,65.3h-173.4h-175.5V-3498.9z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="shadow-mainColor/20 flex min-w-[250px] items-center justify-between space-x-[40px] rounded-2xl border p-[30px] shadow-xl">
        <div>
          <h5 className="text-center text-2xl font-bold text-mainColor">
            {data.totalCartons}
          </h5>
          <h6 className="text-xs text-brandText">Total Cartons</h6>
        </div>
        <svg
          className="h-[40px] w-[40px] text-brandText"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M23.8,258.3c-14-0.9-18,7.1-9,17.9l157.8,187.6c9,10.8,27.7,19.1,41.7,18.6l207.8-1.6l-244.3-213L23.8,258.3z" />
              <path d="M977.6,231.8l-329.3-101c-13.4-4.1-32.3,0.7-42.1,10.7l-58.1,59c-1.5,1.5-2.6,3.2-3.5,4.7l-62.6-77.1c-4.9-13.1-20.1-22.5-34.1-20.8l-292.5,35.2c-13.9,1.7-20,13.2-13.6,25.6l36,99.7l372-41.1c1.1,0.8,2.4,1.5,3.8,2.1L842,355.5L422.2,480.8l102.7,154.4c7.4,11.9,24.3,18.1,37.6,13.8l397.8-128.9c13.3-4.3,16.4-16.1,6.9-26.4l-86.5-134.3c4.5-1.8,8.7-4.4,11.9-7.6l91.6-94.3C994,247.3,991.1,235.9,977.6,231.8z" />
              <path d="M549.7,686c-13.3,4.3-30-1.8-37.2-13.9l-96.4-160.3H197v71c0,10.2,5.3,24.7,11.8,32.5L432.9,884c6.5,7.8,19.4,11.1,28.8,7.3l346.9-138.8c9.4-3.8,18-15,19.1-25.1l15.4-137.3L549.7,686z" />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AdminStats;