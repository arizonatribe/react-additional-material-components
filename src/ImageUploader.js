/* eslint-env browser*/
import React, {PropTypes, Component} from 'react';
import {isString, isValidImageUri} from 'utilitarian/is.util';
import {dataURIPrefixPattern, getDataURIFileExtension} from 'utilitarian/string.util';
import {Card, CardHeader, CardMedia, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {StyleSheet, css} from 'aphrodite';

import {imageUploaderStyles} from './styles';

const styles = StyleSheet.create(imageUploaderStyles);
const FILE_SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.reader = new FileReader();
        this.reader.onload = (event) => {
            this.reader.image.FileContent = this.updateFileContent(event.target.result, this.reader.image);
        };
    }

    formatBytes(bytes) {
        const converted = Math.floor(Math.log(bytes) / Math.log(1000));

        return !bytes ? '0 Bytes' :
            `${parseFloat((bytes / Math.pow(1000, converted)).toFixed(2))} ${FILE_SIZES[converted]}`;
    }

    arrayBufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);

        return window.btoa(
            Array(bytes.byteLength).fill().map((val, index) => String.fromCharCode(bytes[index])).join('')
        );
    }

    updateFile(file) {
        if (file) {
            if (file.size <= this.props.maxSizeInBytes) {
                if (isValidImageUri(file.type.split('/')[1])) {
                    const name = file.name.split('.');
                    if (isString(name[0]) && name[0]) {
                        name.splice(name.length - 1, 1);
                        this.reader.image = {
                            fileName: name.join('.'),
                            fileExtension: file.type.split('/')[1],
                            fileSize: this.formatBytes(file.size)
                        };
                        this.reader.readAsArrayBuffer(file);
                    }
                }
            }
        }
    }

    parseBase64String(str = '', extension = 'png') {
        const parsedBase64 = str.replace(dataURIPrefixPattern, '');
        const ext = getDataURIFileExtension(str);

        return parsedBase64 ?
            `data:image/${isValidImageUri(ext) ? ext : extension};base64, ${parsedBase64}` : '';
    }

    updateFileContent(base64) {
        if (base64) {
            const newBase64String = this.arrayBufferToBase64(base64);
            const srcString = this.parseBase64String(newBase64String, this.reader.image.fileExtension);

            this.profileImage.src = srcString;
            this.props.imageUploadeFinished(srcString);

            if (this.reader.image && newBase64String !== this.reader.image.FileContent) {
                return newBase64String;
            }
        }

        return base64;
    }

    render() {
        const {imageTypeCaption, maxSizeInBytes, containerCSSProps, existingImageBase64String} = this.props;

        return (
            <Card
              containerStyle={containerCSSProps}
              className={css(styles.card)}
            >
                <CardHeader
                  title='Upload An Image'
                  subtitle={
                      `Upload a ${imageTypeCaption} image (must be under ${maxSizeInBytes} bytes)`
                  }
                  avatar={existingImageBase64String ?
                      `${this.parseBase64String(existingImageBase64String)}` : null
                  }
                  actAsExpander
                  showExpandableButton
                />
                <CardMedia expandable>
                    <img
                      role='presentation'
                      ref={(ele) => {
                          this.profileImage = ele;
                      }}
                      src=''
                    />
                </CardMedia>
                <CardActions expandable>
                    <input
                      ref={(ele) => {
                          this.uploadButton = ele;
                      }}
                      className={css(styles.imageHiddenUploadButton)}
                      onChange={() => this.updateFile(this.uploadButton.files[0])}
                      type='file'
                    />
                    <RaisedButton onClick={() => this.uploadButton.click()}>
                        Upload
                    </RaisedButton>
                </CardActions>
            </Card>
        );
    }
}

ImageUploader.propTypes = {
    containerCSSProps: PropTypes.shape({
        color: PropTypes.string,
        opacity: PropTypes.number,
        width: PropTypes.string,
        margin: PropTypes.string,
        padding: PropTypes.string,
        border: PropTypes.string
    }),
    existingImageBase64String: PropTypes.string,
    imageTypeCaption: PropTypes.string,
    imageUploadeFinished: PropTypes.func.isRequired,
    maxSizeInBytes: PropTypes.number.isRequired
};

ImageUploader.defaultProps = {
    containerCSSProps: {width: '100%'},
    existingImageBase64String: '',
    imageTypeCaption: 'profile',
    maxSizeInBytes: 400000
};

export default ImageUploader;

