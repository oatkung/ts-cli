"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = require("signale");
const path_1 = __importDefault(require("path"));
const http_1 = require("../helpers/http");
exports.default = {
    download(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const signale = new signale_1.Signale();
            const storagePath = process.env.STORAGE_PATH;
            const urls = [
                'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
                'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
                'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
                'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
                'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg'
            ];
            signale.info('Begin download');
            signale.time('download');
            let index = 0;
            for (const url of urls) {
                signale.await(`[%d/${urls.length}] - Process`, index + 1);
                const filename = path_1.default.resolve(storagePath, `test_${index}.jpg`);
                yield (0, http_1.downloadFile)(url, filename);
                index++;
            }
            signale.timeEnd('download');
            signale.complete('Download Completed');
        });
    }
};
