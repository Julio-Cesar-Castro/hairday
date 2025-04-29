import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      const item = event.target.closest("li")
      const { id }= item.dataset

      if (id){
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

        if(isConfirm){
          //Faz a requisição na API para cancelar.
          await scheduleCancel({id})
          // Recarrega os agendamentos.
          schedulesDay()
        }
      }
    }
  })
})