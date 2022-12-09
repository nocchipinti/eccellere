// Function for Email validation
function ValidaEmail(Email){
  var LastChar = Email.length - 1;
  var CharPos = Email.indexOf("@");
  if ((CharPos < 1) || (CharPos == LastChar)) return false;
  // position of first .
  var CharPos = Email.indexOf(".");
  if (CharPos < 1) return false;
  // position of last .
  var CharPos = Email.lastIndexOf(".");
  if (CharPos == LastChar) return false;
  return true;
}



function CheckNewsForm(theForm)
{


 if (theForm.Email.value == "")
  {
    alert("Prego inserire il suo indirizzo email");
    theForm.Email.focus();
    return (false);
  }
 if (theForm.Nome.value == "")
  {
    alert("Prego inserire il suo nome");
    theForm.Nome.focus();
    return (false);
  }
   if (theForm.Cognome.value == "")
  {
    alert("Prego inserire il suo cognome");
    theForm.Cognome.focus();
    return (false);
  }
  if (!ValidaEmail(theForm.Email.value))
  {
    alert("Prego inserire un dato valido nel campo Email");
    theForm.Email.focus();
    return (false);
  }

  var radioSelected = false;
  for (i = 0;  i < theForm.Provenienteda.length;  i++)
  {
    if (theForm.Provenienteda[i].checked)
        radioSelected = true;
  }
  if (!radioSelected)
  {
    alert("Prego selezionare una opzione per indicare come avete conosciuto Eccellere.");
    return (false);
  }

  var radioSelected = false;
  for (i = 0;  i < theForm.action.length;  i++)
  {
    if (theForm.action[i].checked)
        radioSelected = true;
  }
  if (!radioSelected)
  {
    alert("Prego specificare se desiderate essere inseriti o rimossi dalla mailing list");
    return (false);
  }

  if (theForm.professione.selectedIndex == 0)
  {
    alert("Prego inserire la sua professione");
    theForm.professione.focus();
    return (false);
  }
  if (theForm.Area.selectedIndex == 0)
  {
    alert("Prego inserire la sua area funzionale");
    theForm.Area.focus();
    return (false);
  }
return (true);
}
