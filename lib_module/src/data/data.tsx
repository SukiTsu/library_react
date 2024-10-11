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
          " A customizable input component that supports labels, placeholders, and various attributes like required, disabled, and readOnly.",
          presentation: {
            title: "Basic examples",
            description: "The Input component allows users to enter and edit text in a form field.",
            props: {
              title: "How it works",
              description: "The Input component renders a customizable text field for user input, with optional validation and display features.",
              props1: {
                title: "type",
                description: "Defines the input type, such as 'text', 'password', 'email', etc., which determines the format and behavior of the input field.",
              },
              props2: {
                title: "placeholder",
                description: "Text that appears in the input field when it is empty, guiding the user on what to enter.",
              },
              props3: {
                title: "required",
                description: "A boolean prop that, when true, makes the input field mandatory, ensuring users cannot submit the form without completing it.",
              },
            },
          }
          
      },
      component2: {
        name: "Checkbox",
        description:
          "Easily create CheckBox with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "A title with a list of checkbox values",
          props: {
            title: "How it works",
            description: "CheckBox component with checkbox title.",
            props1: {
              title: "Title",
              description: "Title displayed above checkboxes",
            },
            props2: {
              title: "ListChek",
              description: "List of words with checkboxes",
            },
            props3: {
              title: "BkColor",
              description: "Box background color (red|blue|green)",
            },
          },
        },
      },
      component3: {
        name: "Select",
        description:
          "A dropdown component allowing users to choose from a predefined list of options with support for custom labels and values.",
          presentation: {
            title: "Basic examples",
            description: "The Select component allows users to choose one option from a dropdown list.",
            props: {
              title: "How it works",
              description: "The Select component renders a dropdown menu with multiple options. It is customizable and supports various event handlers.",
              props1: {
                title: "options",
                description: "An array of options to be displayed in the dropdown. Each option can include a label and value.",
              },
              props2: {
                title: "onChange",
                description: "A function that is triggered when the selected option changes, allowing you to handle user selections.",
              },
              props3: {
                title: "disabled",
                description: "A boolean prop that, when true, disables the dropdown, preventing any user interaction.",
              },
            },
          }          
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
          "Easily create Toggle with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "A switch button where its shape and color can be modified",
          props: {
            title: "How it works",
            description: "When clicked, its state changes",
            props1: {
              title: "Form",
              description: "Button edge shape",
            },
            props2: {
              title: "Color",
              description: "Button color",
            },
          },
        },
      },
      component6: {
        name: "Button",
        description:
          " A clickable button component that can trigger actions, supporting various states such as disabled or active.",
          presentation: {
            title: "Basic examples",
            description: "The Button component triggers an action when clicked and can be customized in terms of style and functionality.",
            props: {
              title: "How it works",
              description: "The Button is a clickable UI element that can be customized with text, icons, and different styles. It supports various event handlers such as onClick for user interactions.",
              props1: {
                title: "onClick",
                description: "A function that is triggered when the Button is clicked. This allows you to define custom behavior or actions when the button is pressed.",
              },
              props2: {
                title: "disabled",
                description: "A boolean prop that disables the Button when set to true, preventing any interaction or triggering of events.",
              },
              props3: {
                title: "style",
                description: "An object used to customize the button’s appearance, such as background color, border, size, or text color. Allows for flexible styling directly in the component.",
              },
            },
          }          
      },
      component7: {
        name: "Loader",
        description:
          "A visual component that displays a loading animation to indicate that a process is in progress.",
          presentation: {
            title: "Basic examples",
            description: "The Loader component provides a visual indication that content is being loaded or a process is in progress.",
            props: {
              title: "How it works",
              description: "The Loader component displays a loading spinner or animation to inform users that the system is busy and content will appear soon.",
              props1: {
                title: "size",
                description: "Defines the size of the loader, allowing you to adjust the scale of the spinner or animation to fit different areas of your UI.",
              },
              props2: {
                title: "color",
                description: "Allows customization of the loader's color, making it adaptable to various design themes and backgrounds.",
              },
              props3: {
                title: "isLoading",
                description: "A boolean prop that controls whether the loader is visible or hidden, based on the application's loading state.",
              },
            },
          }
          
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
          "Easily create Card with different statuses and sizes using our components.",
        presentation: {
          title: "Basic examples",
          description: "Displays an image in a div with a title and content",
          props: {
            title: "How it works",
            description: "Editable image, title, content and color",
            props1: {
              title: "SrcImg",
              description: "Image path",
            },
            props2: {
              title: "Title",
              description: "Content title",
            },
            props3: {
              title: "Content",
              description: "Component contents",
            },
          },
        },
      },
    },
    organismes: {
      component1: {
        name: "Accordéon",
        description:
          "A collapsible section component that can display multiple sections with toggle functionality, supporting custom styles and configurations.",
          presentation: {
            title: "Basic examples",
            description: "The Accordion component allows users to toggle between sections of content, displaying only one or multiple sections at a time.",
            props: {
              title: "How it works",
              description: "The Accordion uses state to control which sections are open, with customizable options for allowing multiple sections to be open at once and various styling options.",
              props1: {
                title: "allowMultipleOpen",
                description: "Determines whether multiple sections can be open simultaneously. Set to 'true' to allow multiple sections to be expanded at once.",
              },
              props2: {
                title: "customStyles",
                description: "An object containing various style properties to customize the appearance of the Accordion, including header color, content color, border radius, width, and display mode.",
              },
              props3: {
                title: "sections",
                description: "An array of section objects, each containing a title and content for individual Accordion sections. These define the content displayed in the Accordion.",
              },
            },
          }          
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
