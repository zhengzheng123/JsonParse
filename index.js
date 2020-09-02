'use strict';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      json: {
        apc_code: 'TK2',
        open_ro_flag: 'N',
        nums: [1,2,3,4],
        device_info: {
          ibase_status: "SH",
          serial_number: "352181100791351",
          serial_type: "IMEI",
          service_offer_children: [
            {
              service_offer_id: '801079',
              service_offer_name: 'MDSFEE06',
            },
            {
              service_offer_id: '801679',
              service_offer_name: 'GFFHE06',
            }
          ]
        },
        service_offers: [
          {
            service_offer_id: '79140166',
            service_offer_name: '(SVC-SO-00052)'
          },
          {
            service_offer_id: '2c90848471061bca01710a7b4325175c',
            service_offer_name: '(SVC-SO-00055)'
          }
        ]
      }
    }

  }

  render() {
    return (
      <div style={{overflow: 'hidden'}}>
        <Item
          data={this.state.json}
        />
      </div>
    )
  }
}


ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)