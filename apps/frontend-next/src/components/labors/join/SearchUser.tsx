import React, {FC} from "react";
import {Form} from "react-bootstrap";


const SearchUser:FC = () => {

  return (
      <table className="table table-striped table-bordered item-va-middle table-search m-0">
        <tbody>
        <tr>
          <th scope="row" className="bg-dark text-white align-middle">sample</th>
          <td colSpan="3">
            <Form.Control type="text" name="address1"/>
          </td>
        </tr>
        {/*  <tr>*/}
        {/*    <th scope="row" className="bg-dark text-white align-middle">エリア2</th>*/}
        {/*    <td colSpan="3">*/}
        {/*      <Form.Row>*/}

        {/*      </Form.Row>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <th scope="row" className="bg-dark text-white align-middle"></th>*/}
        {/*    <td colSpan="3">*/}
        {/*      <Form.Row className="align-items-center">*/}

        {/*      </Form.Row>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <th scope="row" className="bg-dark text-white align-middle"></th>*/}
        {/*    <td colSpan="3">*/}
        {/*      <Form.Row className="align-items-center">*/}

        {/*      </Form.Row>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <th scope="row" className="bg-dark text-white align-middle">（㎡）</th>*/}
        {/*    <td colSpan="3">*/}
        {/*      <Form.Row className="align-items-center">*/}

        {/*      </Form.Row>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        </tbody>
      </table>
  )
}

export default SearchUser