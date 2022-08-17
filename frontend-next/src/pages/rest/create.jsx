import React, {useState} from "react";
import {Button, Col, Container, Form, FormCheck, Modal, Row} from "react-bootstrap";

const RestCreate = ({users}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState('')
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  // 地図検索
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      title: e.currentTarget.title.value,
      detail: e.currentTarget.detail.value
    }

    // API問い合わせ
    try {
      const res = await fetch('/api/hr_admin/rest/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const fetchData = await res.json();

      await (() => {
        let tmpBlog = [];
        fetchData.map((data) => {

          const blog = {
            id: data.id,
            title: data.title,
            detail: data.detail,
            created_at: data.created_at,
            updated_at: data.updated_at,
          };

          tmpBlog.push(blog);
        })
        setBlog(tmpBlog);
      })(fetchData);

    } catch(e) {
      console.log(e)
    }

    setIsLoading(false);
  }

  return (
      <>
        <div>
          <h2 className="h4 p-3">Save</h2>
          <div className="px-4">
            <Form onSubmit={handleSubmit}>
              <div className="mt-3 text-right">
                <button type="submit" className="btn btn-success">検索</button>
              </div>

              <table className="table table-striped table-bordered item-va-middle table-search m-0">
                <tbody>
                <tr>
                  <th scope="row" className="bg-dark text-white align-middle">test</th>
                  <td colSpan="3">
                    <Form.Row className="align-items-center">
                      <Form.Control type="text" name="title" defaultValue={title}/>
                    </Form.Row>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-dark text-white align-middle">test</th>
                  <td colSpan="3">
                    <Form.Row className="align-items-center">
                      <Form.Control type="text" name="detail" defaultValue={detail}/>
                    </Form.Row>
                  </td>
                </tr>
                </tbody>
              </table>
            </Form>
          </div>
        </div>
      </>
  )
}

export default RestCreate



