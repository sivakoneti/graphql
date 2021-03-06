export default {
  "request_data": [{
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "query",
      "variableDefinitions": [

      ],
      "directives": [

      ],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "allFlights",
              "loc": {
                "start": 3,
                "end": 13
              }
            },
            "arguments": [
              {
                "kind": "Argument",
                "name": {
                  "kind": "Name",
                  "value": "search",
                  "loc": {
                    "start": 18,
                    "end": 24
                  }
                },
                "value": {
                  "kind": "ObjectValue",
                  "fields": [
                    {
                      "kind": "ObjectField",
                      "name": {
                        "kind": "Name",
                        "value": "from",
                        "loc": {
                          "start": 27,
                          "end": 31
                        }
                      },
                      "value": {
                        "kind": "ObjectValue",
                        "fields": [
                          {
                            "kind": "ObjectField",
                            "name": {
                              "kind": "Name",
                              "value": "location",
                              "loc": {
                                "start": 34,
                                "end": 42
                              }
                            },
                            "value": {
                              "kind": "StringValue",
                              "value": "PRG",
                              "block": false,
                              "loc": {
                                "start": 43,
                                "end": 48
                              }
                            },
                            "loc": {
                              "start": 34,
                              "end": 48
                            }
                          }
                        ],
                        "loc": {
                          "start": 33,
                          "end": 49
                        }
                      },
                      "loc": {
                        "start": 27,
                        "end": 49
                      }
                    },
                    {
                      "kind": "ObjectField",
                      "name": {
                        "kind": "Name",
                        "value": "to",
                        "loc": {
                          "start": 51,
                          "end": 53
                        }
                      },
                      "value": {
                        "kind": "ObjectValue",
                        "fields": [
                          {
                            "kind": "ObjectField",
                            "name": {
                              "kind": "Name",
                              "value": "location",
                              "loc": {
                                "start": 56,
                                "end": 64
                              }
                            },
                            "value": {
                              "kind": "StringValue",
                              "value": "BCN",
                              "block": false,
                              "loc": {
                                "start": 65,
                                "end": 70
                              }
                            },
                            "loc": {
                              "start": 56,
                              "end": 70
                            }
                          }
                        ],
                        "loc": {
                          "start": 55,
                          "end": 71
                        }
                      },
                      "loc": {
                        "start": 51,
                        "end": 71
                      }
                    },
                    {
                      "kind": "ObjectField",
                      "name": {
                        "kind": "Name",
                        "value": "date",
                        "loc": {
                          "start": 73,
                          "end": 77
                        }
                      },
                      "value": {
                        "kind": "ObjectValue",
                        "fields": [
                          {
                            "kind": "ObjectField",
                            "name": {
                              "kind": "Name",
                              "value": "exact",
                              "loc": {
                                "start": 80,
                                "end": 85
                              }
                            },
                            "value": {
                              "kind": "StringValue",
                              "value": "2018-05-01",
                              "block": false,
                              "loc": {
                                "start": 87,
                                "end": 99
                              }
                            },
                            "loc": {
                              "start": 80,
                              "end": 99
                            }
                          }
                        ],
                        "loc": {
                          "start": 79,
                          "end": 100
                        }
                      },
                      "loc": {
                        "start": 73,
                        "end": 100
                      }
                    }
                  ],
                  "loc": {
                    "start": 26,
                    "end": 101
                  }
                },
                "loc": {
                  "start": 18,
                  "end": 101
                }
              }
            ],
            "directives": [

            ],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "edges",
                    "loc": {
                      "start": 110,
                      "end": 115
                    }
                  },
                  "arguments": [

                  ],
                  "directives": [

                  ],
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                      {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "node",
                          "loc": {
                            "start": 123,
                            "end": 127
                          }
                        },
                        "arguments": [

                        ],
                        "directives": [

                        ],
                        "selectionSet": {
                          "kind": "SelectionSet",
                          "selections": [
                            {
                              "kind": "Field",
                              "name": {
                                "kind": "Name",
                                "value": "id",
                                "loc": {
                                  "start": 137,
                                  "end": 139
                                }
                              },
                              "arguments": [

                              ],
                              "directives": [

                              ],
                              "loc": {
                                "start": 137,
                                "end": 139
                              }
                            }
                          ],
                          "loc": {
                            "start": 128,
                            "end": 146
                          }
                        },
                        "loc": {
                          "start": 123,
                          "end": 146
                        }
                      }
                    ],
                    "loc": {
                      "start": 116,
                      "end": 151
                    }
                  },
                  "loc": {
                    "start": 110,
                    "end": 151
                  }
                }
              ],
              "loc": {
                "start": 105,
                "end": 154
              }
            },
            "loc": {
              "start": 3,
              "end": 154
            }
          }
        ],
        "loc": {
          "start": 0,
          "end": 156
        }
      },
      "loc": {
        "start": 0,
        "end": 156
      }
    }
  ],
  "loc": {
    "start": 0,
    "end": 156
  }
}],
  "metrics": {
    "version": 1,
    "startTime": "2018-04-19T11:02:21.189Z",
    "endTime": "2018-04-19T11:02:22.558Z",
    "duration": 1369694311,
    "execution": {
      "resolvers": [
        {
          "path": [
            "allFlights",
            "edges",
            44,
            "node",
            "id"
          ],
          "parentType": "Flight",
          "fieldName": "id",
          "returnType": "ID!",
          "startOffset": 1369318614,
          "duration": 6298
        }
      ]
    }
  }
}

