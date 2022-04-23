import axios from "axios";
import { addData } from "../ManagerService/Rooms/PostRoom";





jest.mock("axios");



it("addData", async () => {

    // given



    const response = { roomnumber: 234, roomprice: 4000, roomstatus: "vacant", roomtype: "normal" };

    axios.post.mockImplementation(() => response);

    const result = await addData(response);
    expect(axios.post).toHaveBeenCalledWith("/manageRoom/addrooms", response);

    expect(result).toEqual(response);

    console.log(result);

});