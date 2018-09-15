var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({

    Label1: {
      Type: 'weLabel',
      L: 20, T: 20,
      Data: {
        Text: 'First Name:'
      }
    },

    Edit1: {
      Type: 'weEdit',
      L:183, T: 20, W: 200,
      Data: {
        Text: 'Neil'
      }
    },

     Label2: {
      Type: 'weLabel',
      L: 20, T: 72,
      Data: {
        Text: 'Last Name:'
      }
    },

    Edit2: {
      Type: 'weEdit',
      L:183, T: 72, W: 200,
      Data: {
        Text: 'Carducci'
      }
    },

     Label3: {
      Type: 'weLabel',
      L: 20, T: 124,
      Data: {
        Text: 'Moms Maiden Name:'
      }
    },

    Edit3: {
      Type: 'weEdit',
      L:183, T: 124, W: 200,
      Data: {
        Text: 'Washbish'
      }
    },

    Label4: {
      Type: 'weLabel',
      L: 20, T: 176,
      Data: {
        Text: 'Birthplace:'
      }
    },

    Edit4: {
      Type: 'weEdit',
      L:183, T: 176, W: 200,
      Data: {
        Text: 'San Luis Obispo'
      }
    },

    Button1:
    {
      Type: 'weButton',
      L: 153, T: 260,
      Data: {
        Text: 'Say Hello'
      },
      Events: {
        OnClick: function(e) {
          alert('Hello, '+AppForm.Edit1.GetText()+'!');
        }
      }
    }

  });
  AppForm.Update();
}
