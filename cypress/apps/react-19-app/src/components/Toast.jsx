

export const Toast = () => {
    return (
            <sit-toast-container>
        <sit-toast show="">
          <sit-icon slot="icon" name="info-circle-fill"></sit-icon>
          This is a toast notifications
          <sit-link slot="action"><a href="#" target="_blank">Action</a></sit-link>
        </sit-toast>
      </sit-toast-container>
    )
}
