class Queries {
  hasura: string;

  select_user(user_id: string, pw: string) {
    this.hasura = JSON.stringify({
      query: `query getUser {
                      afarm_user(where: {user_id: {_eq: "${user_id}"}, pw: {_eq: "${pw}"}}) {
                          user_id
                          pw
                          name
                          email
                      }
                  }`,
      variables: {},
    });
  }

  select_drones(user_id: string) {
    this.hasura = JSON.stringify({
      query: `query getDrones {
                      afarm_user(where: {user_id: {_eq: "${user_id}"}} ) {
                        drones(order_by: {id: asc}) {
                              product_img
                              is_fly
                              product_name
                              start_time
                              id
                              zone
                          }
                      }
                  }`,
      variables: {},
    });
  }

  insert_user(
    userId: string,
    userPw: string,
    userName: string,
    userEmail: string
  ) {
    this.hasura = JSON.stringify({
      query: `mutation MyMutation {
        insert_afarm_user_one(object: {user_id: "${userId}", pw: "${userPw}", name: "${userName}", email: "${userEmail}"}) {
          user_id
        }
      }
      `,
      variables: {},
    });
  }

  insert_drone(
    product_name: string,
    zone: number,
    product_img: string,
    user_id: string
  ) {
    this.hasura = JSON.stringify({
      query: `mutation MyMutation {
        insert_afarm_drone_one(object: {product_name: "${product_name}", zone:"${zone}", product_img: "${product_img}", user_id: "${user_id}"}) {
          product_name
          id
        }
      }
      `,
      variables: {},
    });
  }

  update_time(drone_id: string, time: string) {
    this.hasura = JSON.stringify({
      query: `mutation MyMutation {
        update_afarm_drone_by_pk(pk_columns: {id: ${drone_id}}, _set: {start_time: "${time}"}) {
          start_time
        }
      }`,
      variables: {},
    });
  }

  insertOrUpdate_flight(
    droneId: number,
    initX: number,
    initY: number,
    width: number,
    height: number,
    grapeHeight: number,
    interval: number,
    sightRange: number
  ) {
    this.hasura = JSON.stringify({
      query: `mutation MyMutation {
        insert_afarm_flight_one(object: {id: ${droneId},\
          init_x: ${0},\
          init_y: ${0},\
          width: ${width},\
          height: ${height},\
          grape_height: ${grapeHeight}, interval: ${interval}, sight_range: ${sightRange}},\
          on_conflict: {constraint: flight_pkey, update_columns: [grape_height, id, init_x, init_y, interval, sight_range, width, height]}) {
          id
        }
      }
      `,
      variables: {},
    });
  }

  update_drone_path(product_name: any, user_id: any, path: any) {
    var result = '{';
    for (var i = 0; i < path.length - 1; i++) {
      result += '{' + path[i][0] + ',' + path[i][1] + '},';
    }
    result +=
      '{' + path[path.length - 1][0] + ',' + path[path.length - 1][1] + '}}';

    this.hasura = JSON.stringify({
      query: `mutation MyMutation {
        update_afarm_drone(where: {user_id: {_eq: "${user_id}"}, product_name: {_eq: "${product_name}"}}, _set: {path: "${result}"}) {
          returning {
            product_name
          }
        }
      }
      `,
      variables: {},
    });
  }

  get_quality(user_id: string) {
    this.hasura = JSON.stringify({
      query: `query MyQuery {
        afarm_quality(where: {user_id: {_eq: "${user_id}"}}, order_by: {drone: {zone: asc}}) {
          id
          date
          drone {
            zone
          }
        }
      }
      `,
    });
  }

  get_grapes(qualtiy_id: string) {
    this.hasura = JSON.stringify({
      query: `query MyQuery {
        afarm_grape(where: {quality_id: {_eq: ${qualtiy_id}}}, order_by: {grape_id: asc}) {
          img
          berry
          sick_berry
          maturity
          pruning
        }
      }

      `,
    });
  }
}

export { Queries };
