import React, {Component, useEffect} from 'react';
import ClaimService from '../services/claims.service';

type Props = {};

type State = {
  content: string;
};

type Claims = {
  id: number;
  name: string;
  observation: string;
  price: number;
  status: string;
};

//get all claims from claimService
export default function Home() {
  const [content, setContent] = React.useState([] as Claims[]);

  useEffect(() => {
    ClaimService.getClaims('1000', '0').then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setContent(_content);
      },
    );
  }, []);

  return (
    <div className='container'>
      <header className='jumbotron'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Nome</th>
              <th scope='col'>Observações</th>
              <th scope='col'>Preço</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.observation}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
