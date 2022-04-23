

import axios from 'axios';
import { getDepartment } from '../OwnerService/ShowDepartments';




jest.mock('axios');


test("Getting department or not", async () => {



    const department = [{

        "id": 3,

        "departmentName": "jhqbvs",


        "noOfMember": 20

    }, {

        "id": 6,

        "departmentName": "jhghqbvs",


        "noOfMember": 27

    }];



    const resp = { data: department };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    console.log(await getDepartment(res => expect(res.data).toEqual(department)));

});