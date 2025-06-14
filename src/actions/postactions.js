import { postServices, showPosts, showtopPriorityPosts, loginForm } from "../services/post.service";
import { useDispatch, useSelector } from "react-redux";
import { viewPost, topPriorityPost, userlocalData } from "../slice/postslice"

// const dispatch = useDispatch()

export function postCreate(data) {
    try {
        // service call to be handled
        postServices(data).then((req) => {
            alert(req.message)
        }).catch((err) => {
            console.log('error alert___', err)
        })
    } catch (err) {
        console.log(err)
    }
}

export function viewPosts() {
    return (async (dispatch) => {
        try {
            // service call to be handled
            showPosts().then((req) => {
                if (req) {
                    let { count, rows } = req
                    console.log(rows)
                    dispatch(viewPost(rows))
                }
                // alert(req.message)
            }).catch((err) => {
                console.log('error alert___', err)
            })
        } catch (err) {
            console.log(err)
        }

    })
}

export function viewHighPriorityPosts() {
    return (async (dispatch) => {
        try {
            // service call to be handled
            showtopPriorityPosts().then((req) => {
                if (req) {
                    // let { count, rows } = req
                    console.log('top_posts___', req)
                    dispatch(topPriorityPost(req))
                }
                // alert(req.message)
            }).catch((err) => {
                console.log('error alert___', err)
            })
        } catch (err) {
            console.log(err)
        }

    })
}


export function loginRegisterForm(data) {
    return (async (dispatch) => {
        try {
            // service call to be handled
            loginForm(data).then((req) => {
                if (req) {
                    // let { count, rows } = req
                    console.log('req____', req)
                    console.log('create user___', req)
                    // dispatch(userlocalData(req));
                    let storage = window.localStorage.setItem("store-value", JSON.stringify(req))
                    window.location.assign('/')
                    // console.log('storage___', storage)
                } else {
                    alert(req.message)
                }

                // dispatch(topPriorityPost(req))

                // alert(req.message)
            }).catch((err) => {
                console.log('error alert___', err)
            })
        } catch (err) {
            console.log(err)
        }

    })
}
// showPosts