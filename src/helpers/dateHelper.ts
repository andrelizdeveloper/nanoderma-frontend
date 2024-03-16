export default function useDateHelper () {
  
  function getDMYDate () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return {
    getDMYDate
  }

}
