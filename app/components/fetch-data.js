import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class FetchDataComponent extends Component {
  @tracked responseData;
  @action
  async fetchData(endpoint) {
    try {
      const response = await fetch(`http://localhost:4000/${endpoint}`);
      const data = await response.json();
      this.responseData = JSON.stringify(data);
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}`, error);
    }
  }
}