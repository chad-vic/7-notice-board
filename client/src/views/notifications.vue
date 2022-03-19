<template>
  <div class="home">
    <div class="board">
      <div class="head content">
        <div class="left-head">
          <p>important notices</p>
          <span>3 unread</span>
        </div>
        <div class="right-head">
          <button>show all</button>
        </div>
      </div>
      <div class="filter content">
        <div class="filter-div">
          <button>
            <span>Date filter</span
            ><i class="fa-solid fa-chevron-down icon"></i>
          </button>
        </div>
        <div class="search-div">
          <button>c</button>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Notices..."
          />
        </div>
        <div class="upload">
          <button>upload</button>
        </div>
      </div>
      <div class="delete-popup" v-if="removeNotice"></div>
      <div class="delete-modal" v-if="removeNotice">
        <h1>
          <span v-if="dangerIcon"
            ><i class="fa-solid fa-circle-exclamation"></i></span
          >{{ confirmHead }}
          <span v-if="successIcon" class="success"
            ><i class="fa-solid fa-circle-check"></i
          ></span>
        </h1>
        <p>{{ confirmText }}</p>

        <div class="btns">
          <button @click="cancelDelete()" v-if="dangerIcon">cancel</button>
          <button @click="continueDelete()" v-if="dangerIcon" class="del">
            delete
          </button>
          <button @click="cancelDelete()" v-if="successIcon" class="done">
            OK
          </button>
        </div>
      </div>
      <div class="notice-board content">
        <p>all notices</p>
        <table>
          <tr>
            <td class="td"></td>
            <td class="td"></td>
            <td class="message"></td>
            <td class="time"></td>
            <td class="time"></td>
            <td class="td"></td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">
              <input type="checkbox" name="check" id="check" />
            </td>
            <td class="td">
              <button><i class="fa-regular fa-bookmark"></i></button>
            </td>
            <td class="message">
              <span>public</span>
              <p>there won't be school this week</p>
            </td>
            <td class="time">{{ time }}</td>
            <td class="time">8:00 PM</td>
            <td class="td">
              <button @click="editNotice()">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="td">
              <button @click="deleteNotice()">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="td">
              <input type="checkbox" name="check" id="check" />
            </td>
            <td class="td">
              <button><i class="fa-regular fa-bookmark"></i></button>
            </td>
            <td class="message">
              <span>level 4</span>
              <p>
                students with incomplete school fees paid will not be allowed
                into class
              </p>
            </td>
            <td class="time">{{ time }}</td>
            <td class="time">8:00 PM</td>
            <td class="td">
              <button @click="editNotice()">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="td">
              <button @click="deleteNotice()">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="td">
              <input type="checkbox" name="check" id="check" />
            </td>
            <td class="td">
              <button><i class="fa-regular fa-bookmark"></i></button>
            </td>
            <td class="message">
              <span>Public</span>
              <p>message will appear here</p>
            </td>
            <td class="time">{{ time }}</td>
            <td class="time">8:00 PM</td>
            <td class="td">
              <button @click="editNotice()">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="td">
              <button @click="deleteNotice()">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="td">
              <input type="checkbox" name="check" id="check" />
            </td>
            <td class="td">
              <button><i class="fa-regular fa-bookmark"></i></button>
            </td>
            <td class="message">
              <span>public</span>
              <p>message will appear here</p>
            </td>
            <td class="time">{{ time }}</td>
            <td class="time">8:00 PM</td>
            <td class="td">
              <button @click="editNotice()">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="td">
              <button @click="deleteNotice()">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="td">
              <input type="checkbox" name="check" id="check" />
            </td>
            <td class="td">
              <button><i class="fa-regular fa-bookmark"></i></button>
            </td>
            <td class="message">
              <span>level 3</span>
              <p>message will appear here</p>
            </td>
            <td class="time">{{ time }}</td>
            <td class="time">8:00 PM</td>
            <td class="td">
              <button @click="editNotice()">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="td">
              <button @click="deleteNotice()">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="pages">
        <table>
          <tr>
            <td>
              <button><i class="fa-solid fa-chevron-left"></i></button>
            </td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>7</button></td>
            <td><button>...</button></td>
            <td><button>54</button></td>
            <td>
              <button><i class="fa-solid fa-chevron-right"></i></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Notifications",

  setup() {
    let time = ref(new Date());
    let removeNotice = ref(false);
    let confirmHead = ref("");
    let confirmText = ref("");
    let dangerIcon = ref(false);
    let successIcon = ref(false);

    time.value =
      `${time.value.getHours()}` +
      "/" +
      +`
      ${time.value.getDay()}` +
      "/" +
      `${time.value.getFullYear()}`;

    const deleteNotice = () => {
      successIcon.value = false;
      dangerIcon.value = true;
      removeNotice.value = true;
      confirmHead.value = " Are you sure ?";
      confirmText.value = " You want to delete this Notice";
      console.log("delete in process");
    };

    const editNotice = () => {
      console.log("editing notice....");
    };

    const cancelDelete = () => {
      removeNotice.value = false;
    };

    const continueDelete = () => {
      successIcon.value = true;
      dangerIcon.value = false;
      confirmHead.value = "You've confirm delete process.";
      confirmText.value = "Delete successful...";
    };

    return {
      time,
      deleteNotice,
      editNotice,
      removeNotice,
      cancelDelete,
      continueDelete,
      confirmText,
      confirmHead,
      dangerIcon,
      successIcon,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 80vw;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;

  button {
    cursor: pointer;
  }

  .board {
    width: 100%;
    height: 100%;
    background: rgb(229, 244, 236);
    padding: 30px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .content {
      width: 90%;
      background: white;
      border-radius: 5px;
    }

    .head {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 3px;
      box-shadow: 0 3px 2px 1px rgb(194, 193, 193);

      .left-head {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        p {
          text-transform: capitalize;
          padding-left: 2px;
          font-size: 15px;
        }
        span {
          height: 25px;
          width: fit-content;
          padding: 0 10px;
          font-size: 13px;
          background: rgb(195, 56, 47);
          border-radius: 3px;
          box-shadow: 0 0 0.7px 1px rgb(195, 56, 47);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .right-head {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          height: 30px;
          width: fit-content;
          padding: 0 10px;
          border-radius: 8px;
          display: block;
          color: rgb(5, 171, 159);
          background: transparent;
          border: 2px solid rgb(5, 171, 159);
        }
      }
    }

    .filter {
      height: 40px;
      background: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .filter-div {
        width: 130px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;

        button {
          width: 100%;
          height: 40px;
          border: none;
          background: white;
          border-radius: 5px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          span {
            text-transform: capitalize;
            font: 600 13px "Poppins", sans-serif;
          }
          .icon {
            font-weight: 800;
          }
        }
      }
      .search-div {
        width: 55%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        margin-left: -4vw;

        button {
          height: 40px;
          width: 40px;
          border: 3px 0 0 3px;
          background: white;
          border: none;
        }
        input {
          width: 85%;
          height: 40px;
          border-radius: 0 3px 3px 0;
          border: none;
          padding-right: 15px;
          outline: none;
          background: white;
        }
      }
      .upload {
        background: transparent;
        width: 150px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          height: 35px;
          width: 80px;
          border-radius: 5px;
          text-transform: capitalize;
          display: block;
          color: white;
          background: rgb(5, 171, 159);
          border: none;
        }
      }
    }

    .delete-popup {
      width: 80%;
      height: 100%;
      background: black;
      opacity: 0.6;
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .delete-modal {
      width: 630px;
      height: 330px;
      background: white;
      position: fixed;
      top: 23%;
      right: 15%;
      border-radius: 3px;
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      h1 {
        font: 600 30px "Poppins", sans-serif;
        text-align: center;
        span {
          display: block;
          i {
            font-size: 100px;
            color: crimson;
          }
        }
        .success {
          i {
            color: rgb(5, 171, 159);
          }
        }
      }

      p {
        text-align: center;
        font: 500 20px "Poppins", sans-serif;
      }

      .btns {
        width: 60%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;

        button {
          width: 140px;
          height: 50px;
          border-radius: 5px;
          text-transform: capitalize;
          background: transparent;
          background: rgb(252, 252, 252);
          border: 2px solid rgb(199, 196, 196);
        }
        .del {
          background: crimson;
          color: white;
          border: none;
        }
        .done {
          border: none;
          background: crimson;
          color: white;
        }
      }
    }
    .notice-board {
      height: 55%;
      background: transparent;
      overflow: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      p {
        text-transform: capitalize;
        font: 500 14px "Poppins", sans-serif;
      }

      table {
        width: 100%;
        height: fit-content;

        tr {
          width: 100%;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          td {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            background: white;
            border-right: 1px solid rgb(204, 203, 203);
            border-top: 1px solid rgb(204, 203, 203);

            &:last-child {
              border-right: none;
            }
          }
          .td {
            width: 5%;
            cursor: pointer;
            .fa-bookmark,
            .fa-pen-to-square {
              color: rgb(250, 189, 117);
            }
            button {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: transparent;
              border: none;
            }
          }
          .message {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;

            span {
              width: 10%;
              text-align: center;
              color: rgb(116, 115, 115);
              text-transform: capitalize;
            }
            p {
              width: 85%;
              height: 20px;
              padding-right: 10px;
              text-transform: capitalize;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: 500;
              word-break: keep-all;
              color: rgb(43, 42, 42);
            }
          }
          .time {
            width: 12.5%;
            color: rgb(116, 115, 115);
            text-transform: capitalize;
          }
          &:first-child {
            td {
              border-top: none;
            }
          }
        }
      }
    }

    .pages {
      height: 40px;
      width: 40%;
      background: white;

      table {
        width: 100%;
        height: 100%;
        background: inherit;
        padding: 0;
        border: 1px solid rgb(235, 232, 232);

        tr {
          width: 100%;
          height: 100%;
          padding: 0;

          td {
            width: 10%;
            height: 100%;
            border-right: 1px solid rgb(235, 232, 232);
            &:last-child {
              border-right: none;
            }

            button {
              width: 100%;
              height: 100%;
              background: transparent;
              border: none;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
