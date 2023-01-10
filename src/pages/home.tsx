import ClaimService from '../services/claims.service';
import React, {Component} from 'react';

type Props = {};

type State = {
  claims: {
    id: number;
    name: string;
    observation: string;
    price: number;
    status: string;
  }[];
  ready: boolean;
};

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {claims: [], ready: false};
  }

  async componentDidMount() {
    await ClaimService.getClaims('1000', '0')
      .then((response) => {
        this.setState({claims: response.data, ready: true});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    {
      console.log('teste', this.state);
    }
    return (
      <div className='container'>
        {this.state.ready ? (
          <header className='jumbotron'>
            {this.state.claims.length > 0 ? (
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
                  {this.state.claims.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.observation}</td>
                      <td>{item.price}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <tr>
                <td colSpan={4}>Nenhuma reclamação encontrada</td>
              </tr>
            )}
            <button type='button' className='btn btn-primary'>
              Nova reclamação
            </button>
          </header>
        ) : null}
      </div>
    );
  }
}
