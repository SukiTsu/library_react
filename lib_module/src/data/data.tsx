export const RESUME_DATA = {
  sidebar: {
    atoms: [
      {
        name: "Atoms",
        components: {
          component1: {
            name: "Input",
            path: "/atoms/input",
          },
          component2: {
            name: "Checkbox",
            path: "/atoms/checkbox",
          },
          component3: {
            name: "Select",
            path: "/atoms/select",
          },
          component4: {
            name: "Radio",
            path: "/atoms/radio",
          },
          component5: {
            name: "Toggle",
            path: "/atoms/toggle",
          },
          component6: {
            name: "Button",
            path: "/atoms/button",
          },
          component7: {
            name: "Loader",
            path: "/atoms/loader",
          },
        },
      },
    ],
    molecules: [
      {
        name: "Molecules",
        components: {
          component1: {
            name: "Alert",
            path: "/molecules/alert",
          },
          component2: {
            name: "Breadcrumb",
            path: "/molecules/breadcrumb",
          },
          component3: {
            name: "Card",
            path: "/molecules/card",
          },
        },
      },
    ],
    organismes: [
      {
        name: "Organismes",
        components: {
          component1: {
            name: "Accordéon",
            path: "/organismes/accordeon",
          },
          component2: {
            name: "Carousel",
            path: "/organismes/carousel",
          },
          component3: {
            name: "Modal",
            path: "/organismes/modal",
          },
          component4: {
            name: "Tabs",
            path: "/organismes/tabs",
          },
          component5: {
            name: "Tableau",
            path: "/organismes/tableau",
          },
        },
      },
    ],
  },
  content: {
    atoms: {
      component1: {
        name: "Input",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
      component2: {
        name: "Checkbox",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "CheckBox component with checkbox title.",
            props1: {
              title: "Title",
              description: "Title displayed above checkboxes",
            },
            props2: {
              title: "ListChek",
              description: "Liste des mots qui seront accompagné des cases à checker",
            },
            props3: {
              title: "BkColor",
              description: "Couleur de fond de la box (red|blue|green)",
            },
          },
        },
      },
      component3: {
        name: "Select",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
      component4: {
        name: "Radio",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "defaultRadioOptions",
              description: "Object containing radio buttons description.",
            },
          },
        },
      },
      component5: {
        name: "Toggle",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
      component6: {
        name: "Button",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
      component7: {
        name: "Loader",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
    },
    molecules: {
      component1: {
        name: "Alert",
        description:
          "Component used to display alert or information messages to users. It can be used to inform users of an error, success or warning.",
        presentation: {
          title: "Example",
          description:
            "Here's a quick example of an Alert component to import into your project:",
          props: {
            title: "How it works",
            description:
              "Here are the props you can modify to customise your Alert component :",
            props1: {
              title: "type",
              description:
                "Choose the type of alert. Four possibilities: ‘success’ | ‘error’ | ‘warning’ | ‘info’.",
            },
            props2: {
              title: "message",
              description: "Choose the message you want to display.",
            },
            props3: {
              title: "autoClose",
              description:
                "Choose how the component closes. Either manually or automatically.",
            },
            props4: {
              title: "autoCloseTime",
              description:
                "Select the time after which the component closes and disappears. (for example : autoCloseTime={20} for 20s)",
            },
          },
        },
      },
      component2: {
        name: "Breadcrumb",
        description:
          "List of clickable links that redirect",
        presentation: {
          title: "Basic examples",
          description: "Here's a quick example of an Breadcrumbs component to import into your project",
          props: {
            title: "How it works",
            description: "A string of characters that will be listed for user navigation",
            props1: {
              title: "ListOnglet",
              description: "List of tabs to be listed",
            },
            props2: {
              title: "ListeLien",
              description: "List of links to which users will be redirected when they click on a nail",
            },
            props3: {
              title: "BkColor",
              description: "Tab background color",
            },
          },
        },
      },
      component3: {
        name: "Card",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
    },
    organismes: {
      component1: {
        name: "Accordéon",
        description:
          "Easily create inputs with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "description",
          props: {
            title: "How it works",
            description: "description",
            props1: {
              title: "propsInput1",
              description: "description du props 1",
            },
            props2: {
              title: "propsInput2",
              description: "description du props 2",
            },
            props3: {
              title: "propsInput3",
              description: "description du props 3",
            },
          },
        },
      },
      component2: {
        name: "Carousel",
        description:
          "A component used to scroll through a set of elements (often images, maps or slides) interactively. The Carousel can include features such as navigation buttons, automatic transitions and more.",
        presentation: {
          title: "Example",
          description:
            "Here's a quick example of an Carousel component to import into your project :",
          props: {
            title: "How it works",
            description:
              "Here are the props you can modify to customise your Carousel component :",
            props1: {
              title: "images",
              description:
                "Choose the images you want to appear in your carousel.",
            },
            props2: {
              title: "interval",
              description:
                "Choose the length of the interval between images (for example : interval={20} for 20s).",
            },
            props3: {
              title: "showControls",
              description:
                "Choose whether or not you want to display the carousel control buttons.",
            },
          },
        },
      },
      component3: {
        name: "Modal",
        description:
          "Modal component. When the button is clicked, a box is displayed with a given content.",
        presentation: {
          title: "Basic examples",
          description: "Here's a quick example of an Modal component to import into your project :",
          props: {
            title: "How it works",
            description: "",
            props1: {
              title: "Title",
              description: "Text to be displayed as title in box",
            },
            props2: {
              title: "Content",
              description: "Content that will be in the box",
            },
            props3: {
              title: "BkColor",
              description: "Frame background color",
            },
            props4: {
              title: "Position",
              description: "Position where box will be displayed",
            },
          },
        },
      },
      component4: {
        name: "Tabs",
        description:
          "Tabs component listing links that will display content when clicked",
        presentation: {
          title: "Basic examples",
          description: "Here's a quick example of an Modal component to import into your project :",
          props: {
            title: "How it works",
            description: "A list of characters to be used as buttons to display content when clicked.",
            props1: {
              title: "Titles",
              description: "List of titles that will be buttons",
            },
            props2: {
              title: "ListContent",
              description: "List of content that will be displayed when one of the titles is clicked",
            },
            props3: {
              title: "Color",
              description: "Tab background color",
            },
          },
        },
      },
      component5: {
        name: "Tableau",
        description:
          "Component for displaying, sorting, paging and selecting data in a configurable way.",
        presentation: {
          title: "Example",
          description:
            "Here's a quick example of an Tableau component to import into your project:",
          props: {
            title: "How it works",
            description:
              "Here are the props you can modify to customise your Tableau component :",
            props1: {
              title: "data",
              description:
                "Provide all the data you want to display in your table.",
            },
            props2: {
              title: "colums",
              description:
                "Provide the types of data to be classified in your table.",
            },
            props3: {
              title: "rowsPerPage",
              description:
                "Choose the number of lines per page you wish to display.",
            },
          },
        },
      },
    },
  },
};
