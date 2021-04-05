///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState} from "react";
import {Upload, Spin} from "antd";
import styles from "./index.css";
import {PlusOutlined} from "@ant-design/icons";


//-------------------------------------------------------------------------------------------------------------------//


function Avatar(props, ref) {

	const [loading, setLoading] = useState(false);

	return (

		<React.Fragment>
			<Upload
				ref={ref}
				accept=".jpg,.png,.gif"
				listType="picture-card"
				showUploadList={false}
				action="/api/upload"
				name="imagefile"
				beforeUpload={() => setLoading(true)}
				onChange={data => {

					// console.log(data.file.response);

					if (data.file.response) {

						props.onChangeUrl && props.onChangeUrl(data.file.response.path);

						setLoading(false);
					}
				}}
			>
				<Spin spinning={loading}>
					<div className={styles.avatar}>
						{getAvatarCon(props.imgUrl)}
					</div>
				</Spin>
			</Upload>
		</React.Fragment>
	);
}

function getAvatarCon(imgUrl){
	if (imgUrl) {

		return (
			<img
				className={styles.avatarimg}
				src={imgUrl}
				alt="img"
			/>
		);

	} else {

		return (
			<div>
				<PlusOutlined
					style={{
						fontSize: '2em'
					}}
				/>
				<div
					style={{
						color: '#666',
						fontSize: '0.8em'
					}}
				>添加图片</div>
			</div>
		);
	}
}

export default React.forwardRef(Avatar);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////