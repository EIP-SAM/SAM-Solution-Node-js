var statManager = require('../../managers/statistic');

describe("Register/Get method for Entity", function() {
  it("should add a method to the methods array and get the method result", function(){

    statManager.statisticRegisterMethodForEntity('UserTest', 'GraphBarOfAgeTest', function() {

      var returnData = {
        type: 'bar',
        labels: ['janvier', 'fevrier', 'mars'],
        title: 'Graphique barre age',
        dataset: [
          {
            title: 'Age des utilisateurs',
            data: [65, 50, 79]
          },
          {
            title: 'Age des enfants',
            data: [35, 20, 49]
          },
        ]
      };

      return (returnData);
    });

    var result = statManager.statisticGetMethodForEntity('UserTest', 'GraphBarOfAgeTest');

    expect(result).not.toBeNull();
    expect('object' === typeof result).toBeTruthy();
  })
});

describe("Add/Get filter", function() {
  it("should add a filter to the methods array and get the filters array", function(){

    statManager.addFilter('UserTest');

    var result = statManager.getStatisticFilters();

    expect(result).not.toBeNull();
    expect('object' === typeof result).toBeTruthy();
  })
});

describe("Get all statistic list by type", function() {
  it("should get list of statistics by the type passed in parameter", function(){

    statManager.statisticRegisterMethodForEntity('VoitureTest', 'GraphBarOfCarTest', function() {

      var returnData = {
        type: 'bar',
        labels: ['bmw', 'audi', 'mercedes'],
        title: 'Graphique voiture',
        dataset: [
          {
            title: 'Taille des voitures',
            data: [65, 50, 79]
          },
          {
            title: 'Taille des pneu',
            data: [35, 20, 49]
          },
        ]
      };

      return (returnData);
    });

    var result = statManager.getStatisticTypeAndNameListByType('VoitureTest');

    expect(result).not.toBeNull();
    expect('object' === typeof result).toBeTruthy();
    expect('object' === typeof result['data']).toBeTruthy();
    expect(1 === result['data'].length).toBeTruthy();
  })
});
