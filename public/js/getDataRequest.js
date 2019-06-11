/*
 * @Author: ngm 
 * @Date: 2019-01-21 16:18:38 
 * @Last Modified by: ngm
 * @Last Modified time: 2019-01-22 10:22:13
 */

window.GetData = {
  alert: function (message) {
    let container = document.createElement('div'),
      header = document.createElement('section'),
      content = document.createElement('section'),
      footer = document.createElement('section'),
      confirm = document.createElement('button');
    //设置class
    container.className = 'mgc-popup';
    header.className = 'mgc-popup-head';
    content.className = 'mgc-popup-content';
    footer.className = 'mgc-popup-footer';
    confirm.className = 'mgc-popup-confirm';
    //设置初始值
    header.innerText = '提示';
    content.innerText = message;
    confirm.innerText = '确定';
    //设置样式 component/*.styl文件定义
    //添加DOM
    footer.appendChild(confirm);
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
    document.body.appendChild(container);
    //按钮添加事件
    confirm.addEventListener('click', function () {
      container.style.display = 'none';
    });
  },
  /**
  * 
  * @param {*} url 
  * @param {*} options 参数，请求头等
  */
  fetch: function (url, options) {
    let result = {
      code: 200,
      message: "",
      data: []
    }

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('数据请求失败');
        })
        .then(json => {
          if (json.code == 407) {
            return alert(json.message);
          } else if (json.code == 401) {
            return location.href = '/login';
          }
          resolve(json);
        })
        .catch((err) => {
          result.code = 500;
          result.message = "数据请求失败";
          reject(result);
        });
    });
  },

  /**
   * 下载文件
   * @param {string} url 请求的url
   * @param {object} options 请求配置
   */
  fetchDownload(url, options) {
    let result = {
      code: 200,
      message: ""
    };
    let filename;

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(res => {
          if (res.ok) {
            //获取下载的文件的名字
            const disposition = res.headers.get('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
              const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
              const matches = filenameRegex.exec(disposition);
              if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
              }
            }
            return res.blob();
          }
          throw new Error('数据下载失败');
        })
        .then(blob => {
          const a = document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = filename;
          a.click();
          window.URL.revokeObjectURL(url);
          resolve(blob);
        })
        .catch((err) => {
          result.code = 500;
          result.message = "数据下载失败";
          reject(result);
        });
    });
  }
}