! function() {
    var __webpack_modules__ = {
            262: function(e, t, o) {
                e.exports = o(390)
            },
            390: function(module, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, k;

                function _typeof(e) {
                    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                module = __webpack_require__.nmd(module), window, k = function() {
                    return l = [function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = function(e, t) {
                            if (e)
                                for (var o in e) hasOwnProperty.call(e, o) && t(e[o], o)
                        }, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        e.exports = {
                            Platform: o(35),
                            ThriftTransport: o(40),
                            ProtoTransport: o(41),
                            thrift: o(49),
                            crouton_thrift: o(50),
                            proto: o(3)
                        }
                    }, function(e, o, t) {
                        "use strict";

                        function r(e) {
                            for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t])
                        }
                        Object.defineProperty(o, "__esModule", {
                            value: !0
                        });
                        var i = t(28);
                        o.BinaryCarrier = i.default;
                        var n = t(29);
                        o.Tags = n;
                        i = t(10), n = t(16);
                        o.Reference = n.default;
                        n = t(5);
                        o.Span = n.default;
                        n = t(13);
                        o.SpanContext = n.default;
                        n = t(11);
                        o.Tracer = n.Tracer;
                        n = t(30);
                        o.MockTracer = n.MockTracer, r(t(33)), r(t(15)), r(t(14)), i.initialize()
                    }, function(e, t, o) {
                        "use strict";
                        var r = o(6),
                            i = r,
                            n = Function("return this")(),
                            s = o(12);
                        o(46), i.exportSymbol("proto.lightstep.collector.Auth", null, n), i.exportSymbol("proto.lightstep.collector.Command", null, n), i.exportSymbol("proto.lightstep.collector.InternalMetrics", null, n), i.exportSymbol("proto.lightstep.collector.KeyValue", null, n), i.exportSymbol("proto.lightstep.collector.Log", null, n), i.exportSymbol("proto.lightstep.collector.MetricsSample", null, n), i.exportSymbol("proto.lightstep.collector.Reference", null, n), i.exportSymbol("proto.lightstep.collector.Reference.Relationship", null, n), i.exportSymbol("proto.lightstep.collector.ReportRequest", null, n), i.exportSymbol("proto.lightstep.collector.ReportResponse", null, n), i.exportSymbol("proto.lightstep.collector.Reporter", null, n), i.exportSymbol("proto.lightstep.collector.Span", null, n), i.exportSymbol("proto.lightstep.collector.SpanContext", null, n), proto.lightstep.collector.SpanContext = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.lightstep.collector.SpanContext, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.SpanContext.displayName = "proto.lightstep.collector.SpanContext"), r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.SpanContext.prototype.toObject = function(e) {
                            return proto.lightstep.collector.SpanContext.toObject(e, this)
                        }, proto.lightstep.collector.SpanContext.toObject = function(e, t) {
                            var o = {
                                traceId: r.Message.getFieldWithDefault(t, 1, "0"),
                                spanId: r.Message.getFieldWithDefault(t, 2, "0"),
                                baggageMap: (o = t.getBaggageMap()) ? o.toObject(e, void 0) : []
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.SpanContext.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.SpanContext;
                            return proto.lightstep.collector.SpanContext.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.SpanContext.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readUint64String();
                                    e.setTraceId(o);
                                    break;
                                case 2:
                                    o = t.readUint64String(), e.setSpanId(o);
                                    break;
                                case 3:
                                    o = e.getBaggageMap(), t.readMessage(o, function(e, t) {
                                        r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "")
                                    });
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.SpanContext.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.SpanContext.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.SpanContext.serializeBinaryToWriter = function(e, t) {
                            var o = void 0,
                                o = e.getTraceId();
                            0 !== parseInt(o, 10) && t.writeUint64String(1, o), o = e.getSpanId(), 0 !== parseInt(o, 10) && t.writeUint64String(2, o), (o = e.getBaggageMap(!0)) && 0 < o.getLength() && o.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString)
                        }, proto.lightstep.collector.SpanContext.prototype.getTraceId = function() {
                            return r.Message.getFieldWithDefault(this, 1, "0")
                        }, proto.lightstep.collector.SpanContext.prototype.setTraceId = function(e) {
                            r.Message.setProto3StringIntField(this, 1, e)
                        }, proto.lightstep.collector.SpanContext.prototype.getSpanId = function() {
                            return r.Message.getFieldWithDefault(this, 2, "0")
                        }, proto.lightstep.collector.SpanContext.prototype.setSpanId = function(e) {
                            r.Message.setProto3StringIntField(this, 2, e)
                        }, proto.lightstep.collector.SpanContext.prototype.getBaggageMap = function(e) {
                            return r.Message.getMapField(this, 3, e, null)
                        }, proto.lightstep.collector.SpanContext.prototype.clearBaggageMap = function() {
                            this.getBaggageMap().clear()
                        }, proto.lightstep.collector.KeyValue = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, proto.lightstep.collector.KeyValue.oneofGroups_)
                        }, i.inherits(proto.lightstep.collector.KeyValue, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.KeyValue.displayName = "proto.lightstep.collector.KeyValue"), proto.lightstep.collector.KeyValue.oneofGroups_ = [
                            [2, 3, 4, 5, 6]
                        ], proto.lightstep.collector.KeyValue.ValueCase = {
                            VALUE_NOT_SET: 0,
                            STRING_VALUE: 2,
                            INT_VALUE: 3,
                            DOUBLE_VALUE: 4,
                            BOOL_VALUE: 5,
                            JSON_VALUE: 6
                        }, proto.lightstep.collector.KeyValue.prototype.getValueCase = function() {
                            return r.Message.computeOneofCase(this, proto.lightstep.collector.KeyValue.oneofGroups_[0])
                        }, r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.KeyValue.prototype.toObject = function(e) {
                            return proto.lightstep.collector.KeyValue.toObject(e, this)
                        }, proto.lightstep.collector.KeyValue.toObject = function(e, t) {
                            var o = {
                                key: r.Message.getFieldWithDefault(t, 1, ""),
                                stringValue: r.Message.getFieldWithDefault(t, 2, ""),
                                intValue: r.Message.getFieldWithDefault(t, 3, "0"),
                                doubleValue: +r.Message.getFieldWithDefault(t, 4, 0),
                                boolValue: r.Message.getFieldWithDefault(t, 5, !1),
                                jsonValue: r.Message.getFieldWithDefault(t, 6, "")
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.KeyValue.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.KeyValue;
                            return proto.lightstep.collector.KeyValue.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.KeyValue.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setKey(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setStringValue(o);
                                    break;
                                case 3:
                                    o = t.readInt64String(), e.setIntValue(o);
                                    break;
                                case 4:
                                    o = t.readDouble(), e.setDoubleValue(o);
                                    break;
                                case 5:
                                    o = t.readBool(), e.setBoolValue(o);
                                    break;
                                case 6:
                                    o = t.readString(), e.setJsonValue(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.KeyValue.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.KeyValue.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.KeyValue.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getKey()).length && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), null != (o = r.Message.getField(e, 3)) && t.writeInt64String(3, o), null != (o = r.Message.getField(e, 4)) && t.writeDouble(4, o), null != (o = r.Message.getField(e, 5)) && t.writeBool(5, o), null != (o = r.Message.getField(e, 6)) && t.writeString(6, o)
                        }, proto.lightstep.collector.KeyValue.prototype.getKey = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.lightstep.collector.KeyValue.prototype.setKey = function(e) {
                            r.Message.setProto3StringField(this, 1, e)
                        }, proto.lightstep.collector.KeyValue.prototype.getStringValue = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.lightstep.collector.KeyValue.prototype.setStringValue = function(e) {
                            r.Message.setOneofField(this, 2, proto.lightstep.collector.KeyValue.oneofGroups_[0], e)
                        }, proto.lightstep.collector.KeyValue.prototype.clearStringValue = function() {
                            r.Message.setOneofField(this, 2, proto.lightstep.collector.KeyValue.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.KeyValue.prototype.hasStringValue = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.lightstep.collector.KeyValue.prototype.getIntValue = function() {
                            return r.Message.getFieldWithDefault(this, 3, "0")
                        }, proto.lightstep.collector.KeyValue.prototype.setIntValue = function(e) {
                            r.Message.setOneofField(this, 3, proto.lightstep.collector.KeyValue.oneofGroups_[0], e)
                        }, proto.lightstep.collector.KeyValue.prototype.clearIntValue = function() {
                            r.Message.setOneofField(this, 3, proto.lightstep.collector.KeyValue.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.KeyValue.prototype.hasIntValue = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.lightstep.collector.KeyValue.prototype.getDoubleValue = function() {
                            return +r.Message.getFieldWithDefault(this, 4, 0)
                        }, proto.lightstep.collector.KeyValue.prototype.setDoubleValue = function(e) {
                            r.Message.setOneofField(this, 4, proto.lightstep.collector.KeyValue.oneofGroups_[0], e)
                        }, proto.lightstep.collector.KeyValue.prototype.clearDoubleValue = function() {
                            r.Message.setOneofField(this, 4, proto.lightstep.collector.KeyValue.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.KeyValue.prototype.hasDoubleValue = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.lightstep.collector.KeyValue.prototype.getBoolValue = function() {
                            return r.Message.getFieldWithDefault(this, 5, !1)
                        }, proto.lightstep.collector.KeyValue.prototype.setBoolValue = function(e) {
                            r.Message.setOneofField(this, 5, proto.lightstep.collector.KeyValue.oneofGroups_[0], e)
                        }, proto.lightstep.collector.KeyValue.prototype.clearBoolValue = function() {
                            r.Message.setOneofField(this, 5, proto.lightstep.collector.KeyValue.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.KeyValue.prototype.hasBoolValue = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.lightstep.collector.KeyValue.prototype.getJsonValue = function() {
                            return r.Message.getFieldWithDefault(this, 6, "")
                        }, proto.lightstep.collector.KeyValue.prototype.setJsonValue = function(e) {
                            r.Message.setOneofField(this, 6, proto.lightstep.collector.KeyValue.oneofGroups_[0], e)
                        }, proto.lightstep.collector.KeyValue.prototype.clearJsonValue = function() {
                            r.Message.setOneofField(this, 6, proto.lightstep.collector.KeyValue.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.KeyValue.prototype.hasJsonValue = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.lightstep.collector.Log = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.Log.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.Log, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Log.displayName = "proto.lightstep.collector.Log"), proto.lightstep.collector.Log.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Log.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Log.toObject(e, this)
                        }, proto.lightstep.collector.Log.toObject = function(e, t) {
                            var o = {
                                timestamp: (o = t.getTimestamp()) && s.Timestamp.toObject(e, o),
                                fieldsList: r.Message.toObjectList(t.getFieldsList(), proto.lightstep.collector.KeyValue.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Log.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Log;
                            return proto.lightstep.collector.Log.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Log.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new s.Timestamp;
                                    t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setTimestamp(o);
                                    break;
                                case 2:
                                    o = new proto.lightstep.collector.KeyValue, t.readMessage(o, proto.lightstep.collector.KeyValue.deserializeBinaryFromReader), e.addFields(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Log.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Log.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Log.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = e.getTimestamp()) && t.writeMessage(1, o, s.Timestamp.serializeBinaryToWriter), 0 < (o = e.getFieldsList()).length && t.writeRepeatedMessage(2, o, proto.lightstep.collector.KeyValue.serializeBinaryToWriter)
                        }, proto.lightstep.collector.Log.prototype.getTimestamp = function() {
                            return r.Message.getWrapperField(this, s.Timestamp, 1)
                        }, proto.lightstep.collector.Log.prototype.setTimestamp = function(e) {
                            r.Message.setWrapperField(this, 1, e)
                        }, proto.lightstep.collector.Log.prototype.clearTimestamp = function() {
                            this.setTimestamp(void 0)
                        }, proto.lightstep.collector.Log.prototype.hasTimestamp = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.lightstep.collector.Log.prototype.getFieldsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.KeyValue, 2)
                        }, proto.lightstep.collector.Log.prototype.setFieldsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 2, e)
                        }, proto.lightstep.collector.Log.prototype.addFields = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.lightstep.collector.KeyValue, t)
                        }, proto.lightstep.collector.Log.prototype.clearFieldsList = function() {
                            this.setFieldsList([])
                        }, proto.lightstep.collector.Reference = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.lightstep.collector.Reference, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Reference.displayName = "proto.lightstep.collector.Reference"), r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Reference.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Reference.toObject(e, this)
                        }, proto.lightstep.collector.Reference.toObject = function(e, t) {
                            var o = {
                                relationship: r.Message.getFieldWithDefault(t, 1, 0),
                                spanContext: (o = t.getSpanContext()) && proto.lightstep.collector.SpanContext.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Reference.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Reference;
                            return proto.lightstep.collector.Reference.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Reference.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readEnum();
                                    e.setRelationship(o);
                                    break;
                                case 2:
                                    o = new proto.lightstep.collector.SpanContext, t.readMessage(o, proto.lightstep.collector.SpanContext.deserializeBinaryFromReader), e.setSpanContext(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Reference.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Reference.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Reference.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 !== (o = e.getRelationship()) && t.writeEnum(1, o), null != (o = e.getSpanContext()) && t.writeMessage(2, o, proto.lightstep.collector.SpanContext.serializeBinaryToWriter)
                        }, proto.lightstep.collector.Reference.Relationship = {
                            CHILD_OF: 0,
                            FOLLOWS_FROM: 1
                        }, proto.lightstep.collector.Reference.prototype.getRelationship = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.lightstep.collector.Reference.prototype.setRelationship = function(e) {
                            r.Message.setProto3EnumField(this, 1, e)
                        }, proto.lightstep.collector.Reference.prototype.getSpanContext = function() {
                            return r.Message.getWrapperField(this, proto.lightstep.collector.SpanContext, 2)
                        }, proto.lightstep.collector.Reference.prototype.setSpanContext = function(e) {
                            r.Message.setWrapperField(this, 2, e)
                        }, proto.lightstep.collector.Reference.prototype.clearSpanContext = function() {
                            this.setSpanContext(void 0)
                        }, proto.lightstep.collector.Reference.prototype.hasSpanContext = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.lightstep.collector.Span = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.Span.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.Span, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Span.displayName = "proto.lightstep.collector.Span"), proto.lightstep.collector.Span.repeatedFields_ = [3, 6, 7], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Span.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Span.toObject(e, this)
                        }, proto.lightstep.collector.Span.toObject = function(e, t) {
                            var o = {
                                spanContext: (o = t.getSpanContext()) && proto.lightstep.collector.SpanContext.toObject(e, o),
                                operationName: r.Message.getFieldWithDefault(t, 2, ""),
                                referencesList: r.Message.toObjectList(t.getReferencesList(), proto.lightstep.collector.Reference.toObject, e),
                                startTimestamp: (o = t.getStartTimestamp()) && s.Timestamp.toObject(e, o),
                                durationMicros: r.Message.getFieldWithDefault(t, 5, "0"),
                                tagsList: r.Message.toObjectList(t.getTagsList(), proto.lightstep.collector.KeyValue.toObject, e),
                                logsList: r.Message.toObjectList(t.getLogsList(), proto.lightstep.collector.Log.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Span.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Span;
                            return proto.lightstep.collector.Span.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Span.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new proto.lightstep.collector.SpanContext;
                                    t.readMessage(o, proto.lightstep.collector.SpanContext.deserializeBinaryFromReader), e.setSpanContext(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setOperationName(o);
                                    break;
                                case 3:
                                    o = new proto.lightstep.collector.Reference, t.readMessage(o, proto.lightstep.collector.Reference.deserializeBinaryFromReader), e.addReferences(o);
                                    break;
                                case 4:
                                    o = new s.Timestamp, t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setStartTimestamp(o);
                                    break;
                                case 5:
                                    o = t.readUint64String(), e.setDurationMicros(o);
                                    break;
                                case 6:
                                    o = new proto.lightstep.collector.KeyValue, t.readMessage(o, proto.lightstep.collector.KeyValue.deserializeBinaryFromReader), e.addTags(o);
                                    break;
                                case 7:
                                    o = new proto.lightstep.collector.Log, t.readMessage(o, proto.lightstep.collector.Log.deserializeBinaryFromReader), e.addLogs(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Span.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Span.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Span.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = e.getSpanContext()) && t.writeMessage(1, o, proto.lightstep.collector.SpanContext.serializeBinaryToWriter), 0 < (o = e.getOperationName()).length && t.writeString(2, o), 0 < (o = e.getReferencesList()).length && t.writeRepeatedMessage(3, o, proto.lightstep.collector.Reference.serializeBinaryToWriter), null != (o = e.getStartTimestamp()) && t.writeMessage(4, o, s.Timestamp.serializeBinaryToWriter), o = e.getDurationMicros(), 0 !== parseInt(o, 10) && t.writeUint64String(5, o), 0 < (o = e.getTagsList()).length && t.writeRepeatedMessage(6, o, proto.lightstep.collector.KeyValue.serializeBinaryToWriter), 0 < (o = e.getLogsList()).length && t.writeRepeatedMessage(7, o, proto.lightstep.collector.Log.serializeBinaryToWriter)
                        }, proto.lightstep.collector.Span.prototype.getSpanContext = function() {
                            return r.Message.getWrapperField(this, proto.lightstep.collector.SpanContext, 1)
                        }, proto.lightstep.collector.Span.prototype.setSpanContext = function(e) {
                            r.Message.setWrapperField(this, 1, e)
                        }, proto.lightstep.collector.Span.prototype.clearSpanContext = function() {
                            this.setSpanContext(void 0)
                        }, proto.lightstep.collector.Span.prototype.hasSpanContext = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.lightstep.collector.Span.prototype.getOperationName = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.lightstep.collector.Span.prototype.setOperationName = function(e) {
                            r.Message.setProto3StringField(this, 2, e)
                        }, proto.lightstep.collector.Span.prototype.getReferencesList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.Reference, 3)
                        }, proto.lightstep.collector.Span.prototype.setReferencesList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 3, e)
                        }, proto.lightstep.collector.Span.prototype.addReferences = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.lightstep.collector.Reference, t)
                        }, proto.lightstep.collector.Span.prototype.clearReferencesList = function() {
                            this.setReferencesList([])
                        }, proto.lightstep.collector.Span.prototype.getStartTimestamp = function() {
                            return r.Message.getWrapperField(this, s.Timestamp, 4)
                        }, proto.lightstep.collector.Span.prototype.setStartTimestamp = function(e) {
                            r.Message.setWrapperField(this, 4, e)
                        }, proto.lightstep.collector.Span.prototype.clearStartTimestamp = function() {
                            this.setStartTimestamp(void 0)
                        }, proto.lightstep.collector.Span.prototype.hasStartTimestamp = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.lightstep.collector.Span.prototype.getDurationMicros = function() {
                            return r.Message.getFieldWithDefault(this, 5, "0")
                        }, proto.lightstep.collector.Span.prototype.setDurationMicros = function(e) {
                            r.Message.setProto3StringIntField(this, 5, e)
                        }, proto.lightstep.collector.Span.prototype.getTagsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.KeyValue, 6)
                        }, proto.lightstep.collector.Span.prototype.setTagsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 6, e)
                        }, proto.lightstep.collector.Span.prototype.addTags = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.lightstep.collector.KeyValue, t)
                        }, proto.lightstep.collector.Span.prototype.clearTagsList = function() {
                            this.setTagsList([])
                        }, proto.lightstep.collector.Span.prototype.getLogsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.Log, 7)
                        }, proto.lightstep.collector.Span.prototype.setLogsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 7, e)
                        }, proto.lightstep.collector.Span.prototype.addLogs = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 7, e, proto.lightstep.collector.Log, t)
                        }, proto.lightstep.collector.Span.prototype.clearLogsList = function() {
                            this.setLogsList([])
                        }, proto.lightstep.collector.Reporter = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.Reporter.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.Reporter, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Reporter.displayName = "proto.lightstep.collector.Reporter"), proto.lightstep.collector.Reporter.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Reporter.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Reporter.toObject(e, this)
                        }, proto.lightstep.collector.Reporter.toObject = function(e, t) {
                            var o = {
                                reporterId: r.Message.getFieldWithDefault(t, 1, "0"),
                                tagsList: r.Message.toObjectList(t.getTagsList(), proto.lightstep.collector.KeyValue.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Reporter.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Reporter;
                            return proto.lightstep.collector.Reporter.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Reporter.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readUint64String();
                                    e.setReporterId(o);
                                    break;
                                case 4:
                                    o = new proto.lightstep.collector.KeyValue, t.readMessage(o, proto.lightstep.collector.KeyValue.deserializeBinaryFromReader), e.addTags(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Reporter.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Reporter.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Reporter.serializeBinaryToWriter = function(e, t) {
                            var o = void 0,
                                o = e.getReporterId();
                            0 !== parseInt(o, 10) && t.writeUint64String(1, o), 0 < (o = e.getTagsList()).length && t.writeRepeatedMessage(4, o, proto.lightstep.collector.KeyValue.serializeBinaryToWriter)
                        }, proto.lightstep.collector.Reporter.prototype.getReporterId = function() {
                            return r.Message.getFieldWithDefault(this, 1, "0")
                        }, proto.lightstep.collector.Reporter.prototype.setReporterId = function(e) {
                            r.Message.setProto3StringIntField(this, 1, e)
                        }, proto.lightstep.collector.Reporter.prototype.getTagsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.KeyValue, 4)
                        }, proto.lightstep.collector.Reporter.prototype.setTagsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 4, e)
                        }, proto.lightstep.collector.Reporter.prototype.addTags = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.lightstep.collector.KeyValue, t)
                        }, proto.lightstep.collector.Reporter.prototype.clearTagsList = function() {
                            this.setTagsList([])
                        }, proto.lightstep.collector.MetricsSample = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, proto.lightstep.collector.MetricsSample.oneofGroups_)
                        }, i.inherits(proto.lightstep.collector.MetricsSample, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.MetricsSample.displayName = "proto.lightstep.collector.MetricsSample"), proto.lightstep.collector.MetricsSample.oneofGroups_ = [
                            [2, 3]
                        ], proto.lightstep.collector.MetricsSample.ValueCase = {
                            VALUE_NOT_SET: 0,
                            INT_VALUE: 2,
                            DOUBLE_VALUE: 3
                        }, proto.lightstep.collector.MetricsSample.prototype.getValueCase = function() {
                            return r.Message.computeOneofCase(this, proto.lightstep.collector.MetricsSample.oneofGroups_[0])
                        }, r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.MetricsSample.prototype.toObject = function(e) {
                            return proto.lightstep.collector.MetricsSample.toObject(e, this)
                        }, proto.lightstep.collector.MetricsSample.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getFieldWithDefault(t, 1, ""),
                                intValue: r.Message.getFieldWithDefault(t, 2, "0"),
                                doubleValue: +r.Message.getFieldWithDefault(t, 3, 0)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.MetricsSample.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.MetricsSample;
                            return proto.lightstep.collector.MetricsSample.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.MetricsSample.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = t.readInt64String(), e.setIntValue(o);
                                    break;
                                case 3:
                                    o = t.readDouble(), e.setDoubleValue(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.MetricsSample.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.MetricsSample.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.MetricsSample.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getName()).length && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeInt64String(2, o), null != (o = r.Message.getField(e, 3)) && t.writeDouble(3, o)
                        }, proto.lightstep.collector.MetricsSample.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.lightstep.collector.MetricsSample.prototype.setName = function(e) {
                            r.Message.setProto3StringField(this, 1, e)
                        }, proto.lightstep.collector.MetricsSample.prototype.getIntValue = function() {
                            return r.Message.getFieldWithDefault(this, 2, "0")
                        }, proto.lightstep.collector.MetricsSample.prototype.setIntValue = function(e) {
                            r.Message.setOneofField(this, 2, proto.lightstep.collector.MetricsSample.oneofGroups_[0], e)
                        }, proto.lightstep.collector.MetricsSample.prototype.clearIntValue = function() {
                            r.Message.setOneofField(this, 2, proto.lightstep.collector.MetricsSample.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.MetricsSample.prototype.hasIntValue = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.lightstep.collector.MetricsSample.prototype.getDoubleValue = function() {
                            return +r.Message.getFieldWithDefault(this, 3, 0)
                        }, proto.lightstep.collector.MetricsSample.prototype.setDoubleValue = function(e) {
                            r.Message.setOneofField(this, 3, proto.lightstep.collector.MetricsSample.oneofGroups_[0], e)
                        }, proto.lightstep.collector.MetricsSample.prototype.clearDoubleValue = function() {
                            r.Message.setOneofField(this, 3, proto.lightstep.collector.MetricsSample.oneofGroups_[0], void 0)
                        }, proto.lightstep.collector.MetricsSample.prototype.hasDoubleValue = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.lightstep.collector.InternalMetrics = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.InternalMetrics.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.InternalMetrics, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.InternalMetrics.displayName = "proto.lightstep.collector.InternalMetrics"), proto.lightstep.collector.InternalMetrics.repeatedFields_ = [3, 4, 5], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.InternalMetrics.prototype.toObject = function(e) {
                            return proto.lightstep.collector.InternalMetrics.toObject(e, this)
                        }, proto.lightstep.collector.InternalMetrics.toObject = function(e, t) {
                            var o = {
                                startTimestamp: (o = t.getStartTimestamp()) && s.Timestamp.toObject(e, o),
                                durationMicros: r.Message.getFieldWithDefault(t, 2, "0"),
                                logsList: r.Message.toObjectList(t.getLogsList(), proto.lightstep.collector.Log.toObject, e),
                                countsList: r.Message.toObjectList(t.getCountsList(), proto.lightstep.collector.MetricsSample.toObject, e),
                                gaugesList: r.Message.toObjectList(t.getGaugesList(), proto.lightstep.collector.MetricsSample.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.InternalMetrics.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.InternalMetrics;
                            return proto.lightstep.collector.InternalMetrics.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.InternalMetrics.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new s.Timestamp;
                                    t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setStartTimestamp(o);
                                    break;
                                case 2:
                                    o = t.readUint64String(), e.setDurationMicros(o);
                                    break;
                                case 3:
                                    o = new proto.lightstep.collector.Log, t.readMessage(o, proto.lightstep.collector.Log.deserializeBinaryFromReader), e.addLogs(o);
                                    break;
                                case 4:
                                    o = new proto.lightstep.collector.MetricsSample, t.readMessage(o, proto.lightstep.collector.MetricsSample.deserializeBinaryFromReader), e.addCounts(o);
                                    break;
                                case 5:
                                    o = new proto.lightstep.collector.MetricsSample, t.readMessage(o, proto.lightstep.collector.MetricsSample.deserializeBinaryFromReader), e.addGauges(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.InternalMetrics.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.InternalMetrics.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.InternalMetrics.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = e.getStartTimestamp()) && t.writeMessage(1, o, s.Timestamp.serializeBinaryToWriter), o = e.getDurationMicros(), 0 !== parseInt(o, 10) && t.writeUint64String(2, o), 0 < (o = e.getLogsList()).length && t.writeRepeatedMessage(3, o, proto.lightstep.collector.Log.serializeBinaryToWriter), 0 < (o = e.getCountsList()).length && t.writeRepeatedMessage(4, o, proto.lightstep.collector.MetricsSample.serializeBinaryToWriter), 0 < (o = e.getGaugesList()).length && t.writeRepeatedMessage(5, o, proto.lightstep.collector.MetricsSample.serializeBinaryToWriter)
                        }, proto.lightstep.collector.InternalMetrics.prototype.getStartTimestamp = function() {
                            return r.Message.getWrapperField(this, s.Timestamp, 1)
                        }, proto.lightstep.collector.InternalMetrics.prototype.setStartTimestamp = function(e) {
                            r.Message.setWrapperField(this, 1, e)
                        }, proto.lightstep.collector.InternalMetrics.prototype.clearStartTimestamp = function() {
                            this.setStartTimestamp(void 0)
                        }, proto.lightstep.collector.InternalMetrics.prototype.hasStartTimestamp = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.lightstep.collector.InternalMetrics.prototype.getDurationMicros = function() {
                            return r.Message.getFieldWithDefault(this, 2, "0")
                        }, proto.lightstep.collector.InternalMetrics.prototype.setDurationMicros = function(e) {
                            r.Message.setProto3StringIntField(this, 2, e)
                        }, proto.lightstep.collector.InternalMetrics.prototype.getLogsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.Log, 3)
                        }, proto.lightstep.collector.InternalMetrics.prototype.setLogsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 3, e)
                        }, proto.lightstep.collector.InternalMetrics.prototype.addLogs = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.lightstep.collector.Log, t)
                        }, proto.lightstep.collector.InternalMetrics.prototype.clearLogsList = function() {
                            this.setLogsList([])
                        }, proto.lightstep.collector.InternalMetrics.prototype.getCountsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.MetricsSample, 4)
                        }, proto.lightstep.collector.InternalMetrics.prototype.setCountsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 4, e)
                        }, proto.lightstep.collector.InternalMetrics.prototype.addCounts = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.lightstep.collector.MetricsSample, t)
                        }, proto.lightstep.collector.InternalMetrics.prototype.clearCountsList = function() {
                            this.setCountsList([])
                        }, proto.lightstep.collector.InternalMetrics.prototype.getGaugesList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.MetricsSample, 5)
                        }, proto.lightstep.collector.InternalMetrics.prototype.setGaugesList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 5, e)
                        }, proto.lightstep.collector.InternalMetrics.prototype.addGauges = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.lightstep.collector.MetricsSample, t)
                        }, proto.lightstep.collector.InternalMetrics.prototype.clearGaugesList = function() {
                            this.setGaugesList([])
                        }, proto.lightstep.collector.Auth = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.lightstep.collector.Auth, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Auth.displayName = "proto.lightstep.collector.Auth"), r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Auth.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Auth.toObject(e, this)
                        }, proto.lightstep.collector.Auth.toObject = function(e, t) {
                            var o = {
                                accessToken: r.Message.getFieldWithDefault(t, 1, "")
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Auth.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Auth;
                            return proto.lightstep.collector.Auth.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Auth.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                1 === t.getFieldNumber() ? (o = t.readString(), e.setAccessToken(o)) : t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Auth.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Auth.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Auth.serializeBinaryToWriter = function(e, t) {
                            0 < (e = e.getAccessToken()).length && t.writeString(1, e)
                        }, proto.lightstep.collector.Auth.prototype.getAccessToken = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.lightstep.collector.Auth.prototype.setAccessToken = function(e) {
                            r.Message.setProto3StringField(this, 1, e)
                        }, proto.lightstep.collector.ReportRequest = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.ReportRequest.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.ReportRequest, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.ReportRequest.displayName = "proto.lightstep.collector.ReportRequest"), proto.lightstep.collector.ReportRequest.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.ReportRequest.prototype.toObject = function(e) {
                            return proto.lightstep.collector.ReportRequest.toObject(e, this)
                        }, proto.lightstep.collector.ReportRequest.toObject = function(e, t) {
                            var o = {
                                reporter: (o = t.getReporter()) && proto.lightstep.collector.Reporter.toObject(e, o),
                                auth: (o = t.getAuth()) && proto.lightstep.collector.Auth.toObject(e, o),
                                spansList: r.Message.toObjectList(t.getSpansList(), proto.lightstep.collector.Span.toObject, e),
                                timestampOffsetMicros: r.Message.getFieldWithDefault(t, 5, "0"),
                                internalMetrics: (o = t.getInternalMetrics()) && proto.lightstep.collector.InternalMetrics.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.ReportRequest.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.ReportRequest;
                            return proto.lightstep.collector.ReportRequest.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.ReportRequest.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new proto.lightstep.collector.Reporter;
                                    t.readMessage(o, proto.lightstep.collector.Reporter.deserializeBinaryFromReader), e.setReporter(o);
                                    break;
                                case 2:
                                    o = new proto.lightstep.collector.Auth, t.readMessage(o, proto.lightstep.collector.Auth.deserializeBinaryFromReader), e.setAuth(o);
                                    break;
                                case 3:
                                    o = new proto.lightstep.collector.Span, t.readMessage(o, proto.lightstep.collector.Span.deserializeBinaryFromReader), e.addSpans(o);
                                    break;
                                case 5:
                                    o = t.readInt64String(), e.setTimestampOffsetMicros(o);
                                    break;
                                case 6:
                                    o = new proto.lightstep.collector.InternalMetrics, t.readMessage(o, proto.lightstep.collector.InternalMetrics.deserializeBinaryFromReader), e.setInternalMetrics(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.ReportRequest.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.ReportRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.ReportRequest.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = e.getReporter()) && t.writeMessage(1, o, proto.lightstep.collector.Reporter.serializeBinaryToWriter), null != (o = e.getAuth()) && t.writeMessage(2, o, proto.lightstep.collector.Auth.serializeBinaryToWriter), 0 < (o = e.getSpansList()).length && t.writeRepeatedMessage(3, o, proto.lightstep.collector.Span.serializeBinaryToWriter), o = e.getTimestampOffsetMicros(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getInternalMetrics()) && t.writeMessage(6, o, proto.lightstep.collector.InternalMetrics.serializeBinaryToWriter)
                        }, proto.lightstep.collector.ReportRequest.prototype.getReporter = function() {
                            return r.Message.getWrapperField(this, proto.lightstep.collector.Reporter, 1)
                        }, proto.lightstep.collector.ReportRequest.prototype.setReporter = function(e) {
                            r.Message.setWrapperField(this, 1, e)
                        }, proto.lightstep.collector.ReportRequest.prototype.clearReporter = function() {
                            this.setReporter(void 0)
                        }, proto.lightstep.collector.ReportRequest.prototype.hasReporter = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.lightstep.collector.ReportRequest.prototype.getAuth = function() {
                            return r.Message.getWrapperField(this, proto.lightstep.collector.Auth, 2)
                        }, proto.lightstep.collector.ReportRequest.prototype.setAuth = function(e) {
                            r.Message.setWrapperField(this, 2, e)
                        }, proto.lightstep.collector.ReportRequest.prototype.clearAuth = function() {
                            this.setAuth(void 0)
                        }, proto.lightstep.collector.ReportRequest.prototype.hasAuth = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.lightstep.collector.ReportRequest.prototype.getSpansList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.Span, 3)
                        }, proto.lightstep.collector.ReportRequest.prototype.setSpansList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 3, e)
                        }, proto.lightstep.collector.ReportRequest.prototype.addSpans = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.lightstep.collector.Span, t)
                        }, proto.lightstep.collector.ReportRequest.prototype.clearSpansList = function() {
                            this.setSpansList([])
                        }, proto.lightstep.collector.ReportRequest.prototype.getTimestampOffsetMicros = function() {
                            return r.Message.getFieldWithDefault(this, 5, "0")
                        }, proto.lightstep.collector.ReportRequest.prototype.setTimestampOffsetMicros = function(e) {
                            r.Message.setProto3StringIntField(this, 5, e)
                        }, proto.lightstep.collector.ReportRequest.prototype.getInternalMetrics = function() {
                            return r.Message.getWrapperField(this, proto.lightstep.collector.InternalMetrics, 6)
                        }, proto.lightstep.collector.ReportRequest.prototype.setInternalMetrics = function(e) {
                            r.Message.setWrapperField(this, 6, e)
                        }, proto.lightstep.collector.ReportRequest.prototype.clearInternalMetrics = function() {
                            this.setInternalMetrics(void 0)
                        }, proto.lightstep.collector.ReportRequest.prototype.hasInternalMetrics = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.lightstep.collector.Command = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.lightstep.collector.Command, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.Command.displayName = "proto.lightstep.collector.Command"), r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.Command.prototype.toObject = function(e) {
                            return proto.lightstep.collector.Command.toObject(e, this)
                        }, proto.lightstep.collector.Command.toObject = function(e, t) {
                            var o = {
                                disable: r.Message.getFieldWithDefault(t, 1, !1),
                                devMode: r.Message.getFieldWithDefault(t, 2, !1)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.Command.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.Command;
                            return proto.lightstep.collector.Command.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.Command.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readBool();
                                    e.setDisable(o);
                                    break;
                                case 2:
                                    o = t.readBool(), e.setDevMode(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.Command.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.Command.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.Command.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            (o = e.getDisable()) && t.writeBool(1, o), (o = e.getDevMode()) && t.writeBool(2, o)
                        }, proto.lightstep.collector.Command.prototype.getDisable = function() {
                            return r.Message.getFieldWithDefault(this, 1, !1)
                        }, proto.lightstep.collector.Command.prototype.setDisable = function(e) {
                            r.Message.setProto3BooleanField(this, 1, e)
                        }, proto.lightstep.collector.Command.prototype.getDevMode = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.lightstep.collector.Command.prototype.setDevMode = function(e) {
                            r.Message.setProto3BooleanField(this, 2, e)
                        }, proto.lightstep.collector.ReportResponse = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.lightstep.collector.ReportResponse.repeatedFields_, null)
                        }, i.inherits(proto.lightstep.collector.ReportResponse, r.Message), i.DEBUG && !COMPILED && (proto.lightstep.collector.ReportResponse.displayName = "proto.lightstep.collector.ReportResponse"), proto.lightstep.collector.ReportResponse.repeatedFields_ = [1, 4, 5, 6], r.Message.GENERATE_TO_OBJECT && (proto.lightstep.collector.ReportResponse.prototype.toObject = function(e) {
                            return proto.lightstep.collector.ReportResponse.toObject(e, this)
                        }, proto.lightstep.collector.ReportResponse.toObject = function(e, t) {
                            var o = {
                                commandsList: r.Message.toObjectList(t.getCommandsList(), proto.lightstep.collector.Command.toObject, e),
                                receiveTimestamp: (o = t.getReceiveTimestamp()) && s.Timestamp.toObject(e, o),
                                transmitTimestamp: (o = t.getTransmitTimestamp()) && s.Timestamp.toObject(e, o),
                                errorsList: r.Message.getRepeatedField(t, 4),
                                warningsList: r.Message.getRepeatedField(t, 5),
                                infosList: r.Message.getRepeatedField(t, 6)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.lightstep.collector.ReportResponse.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.lightstep.collector.ReportResponse;
                            return proto.lightstep.collector.ReportResponse.deserializeBinaryFromReader(e, t)
                        }, proto.lightstep.collector.ReportResponse.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new proto.lightstep.collector.Command;
                                    t.readMessage(o, proto.lightstep.collector.Command.deserializeBinaryFromReader), e.addCommands(o);
                                    break;
                                case 2:
                                    o = new s.Timestamp, t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setReceiveTimestamp(o);
                                    break;
                                case 3:
                                    o = new s.Timestamp, t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setTransmitTimestamp(o);
                                    break;
                                case 4:
                                    o = t.readString(), e.addErrors(o);
                                    break;
                                case 5:
                                    o = t.readString(), e.addWarnings(o);
                                    break;
                                case 6:
                                    o = t.readString(), e.addInfos(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.lightstep.collector.ReportResponse.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.lightstep.collector.ReportResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.lightstep.collector.ReportResponse.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getCommandsList()).length && t.writeRepeatedMessage(1, o, proto.lightstep.collector.Command.serializeBinaryToWriter), null != (o = e.getReceiveTimestamp()) && t.writeMessage(2, o, s.Timestamp.serializeBinaryToWriter), null != (o = e.getTransmitTimestamp()) && t.writeMessage(3, o, s.Timestamp.serializeBinaryToWriter), 0 < (o = e.getErrorsList()).length && t.writeRepeatedString(4, o), 0 < (o = e.getWarningsList()).length && t.writeRepeatedString(5, o), 0 < (o = e.getInfosList()).length && t.writeRepeatedString(6, o)
                        }, proto.lightstep.collector.ReportResponse.prototype.getCommandsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.lightstep.collector.Command, 1)
                        }, proto.lightstep.collector.ReportResponse.prototype.setCommandsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 1, e)
                        }, proto.lightstep.collector.ReportResponse.prototype.addCommands = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.lightstep.collector.Command, t)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearCommandsList = function() {
                            this.setCommandsList([])
                        }, proto.lightstep.collector.ReportResponse.prototype.getReceiveTimestamp = function() {
                            return r.Message.getWrapperField(this, s.Timestamp, 2)
                        }, proto.lightstep.collector.ReportResponse.prototype.setReceiveTimestamp = function(e) {
                            r.Message.setWrapperField(this, 2, e)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearReceiveTimestamp = function() {
                            this.setReceiveTimestamp(void 0)
                        }, proto.lightstep.collector.ReportResponse.prototype.hasReceiveTimestamp = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.lightstep.collector.ReportResponse.prototype.getTransmitTimestamp = function() {
                            return r.Message.getWrapperField(this, s.Timestamp, 3)
                        }, proto.lightstep.collector.ReportResponse.prototype.setTransmitTimestamp = function(e) {
                            r.Message.setWrapperField(this, 3, e)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearTransmitTimestamp = function() {
                            this.setTransmitTimestamp(void 0)
                        }, proto.lightstep.collector.ReportResponse.prototype.hasTransmitTimestamp = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.lightstep.collector.ReportResponse.prototype.getErrorsList = function() {
                            return r.Message.getRepeatedField(this, 4)
                        }, proto.lightstep.collector.ReportResponse.prototype.setErrorsList = function(e) {
                            r.Message.setField(this, 4, e || [])
                        }, proto.lightstep.collector.ReportResponse.prototype.addErrors = function(e, t) {
                            r.Message.addToRepeatedField(this, 4, e, t)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearErrorsList = function() {
                            this.setErrorsList([])
                        }, proto.lightstep.collector.ReportResponse.prototype.getWarningsList = function() {
                            return r.Message.getRepeatedField(this, 5)
                        }, proto.lightstep.collector.ReportResponse.prototype.setWarningsList = function(e) {
                            r.Message.setField(this, 5, e || [])
                        }, proto.lightstep.collector.ReportResponse.prototype.addWarnings = function(e, t) {
                            r.Message.addToRepeatedField(this, 5, e, t)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearWarningsList = function() {
                            this.setWarningsList([])
                        }, proto.lightstep.collector.ReportResponse.prototype.getInfosList = function() {
                            return r.Message.getRepeatedField(this, 6)
                        }, proto.lightstep.collector.ReportResponse.prototype.setInfosList = function(e) {
                            r.Message.setField(this, 6, e || [])
                        }, proto.lightstep.collector.ReportResponse.prototype.addInfos = function(e, t) {
                            r.Message.addToRepeatedField(this, 6, e, t)
                        }, proto.lightstep.collector.ReportResponse.prototype.clearInfosList = function() {
                            this.setInfosList([])
                        }, i.object.extend(t, proto.lightstep.collector)
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.toString = function(e) {
                            return "" + e
                        }, t.toNumber = function(e) {
                            return Number(e)
                        }, t.toBoolean = function(e) {
                            return !!e
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(10),
                            o = (i.prototype.context = function() {
                                return this._context()
                            }, i.prototype.tracer = function() {
                                return this._tracer()
                            }, i.prototype.setOperationName = function(e) {
                                return this._setOperationName(e), this
                            }, i.prototype.setBaggageItem = function(e, t) {
                                return this._setBaggageItem(e, t), this
                            }, i.prototype.getBaggageItem = function(e) {
                                return this._getBaggageItem(e)
                            }, i.prototype.setTag = function(e, t) {
                                var o;
                                return this._addTags(((o = {})[e] = t, o)), this
                            }, i.prototype.addTags = function(e) {
                                return this._addTags(e), this
                            }, i.prototype.log = function(e, t) {
                                return this._log(e, t), this
                            }, i.prototype.logEvent = function(e, t) {
                                return this._log({
                                    event: e,
                                    payload: t
                                })
                            }, i.prototype.finish = function(e) {
                                this._finish(e)
                            }, i.prototype._context = function() {
                                return r.spanContext
                            }, i.prototype._tracer = function() {
                                return r.tracer
                            }, i.prototype._setOperationName = function(e) {}, i.prototype._setBaggageItem = function(e, t) {}, i.prototype._getBaggageItem = function(e) {}, i.prototype._addTags = function(e) {}, i.prototype._log = function(e, t) {}, i.prototype._finish = function(e) {}, i);

                        function i() {}
                        t.Span = o, t.default = o
                    }, function(module, exports, __nested_webpack_require_61379__) {
                        (function(global, Buffer) {
                            var $jscomp = {
                                scope: {},
                                getGlobal: function(e) {
                                    return ("undefined" == typeof window || window !== e) && void 0 !== global ? global : e
                                }
                            };
                            $jscomp.global = $jscomp.getGlobal(this), $jscomp.initSymbol = function() {
                                $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol), $jscomp.initSymbol = function() {}
                            }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(e) {
                                return "jscomp_symbol_" + e + $jscomp.symbolCounter_++
                            }, $jscomp.initSymbolIterator = function() {
                                $jscomp.initSymbol(), $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), $jscomp.initSymbolIterator = function() {}
                            }, $jscomp.makeIterator = function(e) {
                                $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator();
                                var t = e[Symbol.iterator];
                                if (t) return t.call(e);
                                var o = 0;
                                return {
                                    next: function() {
                                        return o < e.length ? {
                                            done: !1,
                                            value: e[o++]
                                        } : {
                                            done: !0
                                        }
                                    }
                                }
                            }, $jscomp.arrayFromIterator = function(e) {
                                for (var t, o = []; !(t = e.next()).done;) o.push(t.value);
                                return o
                            }, $jscomp.arrayFromIterable = function(e) {
                                return e instanceof Array ? e : $jscomp.arrayFromIterator($jscomp.makeIterator(e))
                            }, $jscomp.inherits = function(e, t) {
                                function o() {}
                                for (var r in o.prototype = t.prototype, e.prototype = new o, e.prototype.constructor = e, t) {
                                    var i;
                                    Object.defineProperties ? (i = Object.getOwnPropertyDescriptor(t, r)) && Object.defineProperty(e, r, i) : e[r] = t[r]
                                }
                            }, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(t, o) {
                                $jscomp.initSymbolIterator(), t instanceof String && (t += "");
                                var r = 0,
                                    i = {
                                        next: function() {
                                            if (r < t.length) {
                                                var e = r++;
                                                return {
                                                    value: o(e, t[e]),
                                                    done: !1
                                                }
                                            }
                                            return i.next = function() {
                                                return {
                                                    done: !0,
                                                    value: void 0
                                                }
                                            }, i.next()
                                        }
                                    };
                                return $jscomp.initSymbol(), $jscomp.initSymbolIterator(), i[Symbol.iterator] = function() {
                                    return i
                                }, i
                            }, $jscomp.findInternal = function(e, t, o) {
                                e instanceof String && (e = String(e));
                                for (var r = e.length, i = 0; i < r; i++) {
                                    var n = e[i];
                                    if (t.call(o, n, i, e)) return {
                                        i: i,
                                        v: n
                                    }
                                }
                                return {
                                    i: -1,
                                    v: void 0
                                }
                            }, $jscomp.array.from = function(e, t, o) {
                                $jscomp.initSymbolIterator(), t = null != t ? t : function(e) {
                                    return e
                                };
                                var r = [];
                                if ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), "function" == typeof(i = e[Symbol.iterator]) && (e = i.call(e)), "function" == typeof e.next)
                                    for (; !(i = e.next()).done;) r.push(t.call(o, i.value));
                                else
                                    for (var i = e.length, n = 0; n < i; n++) r.push(t.call(o, e[n]));
                                return r
                            }, $jscomp.array.of = function(e) {
                                return $jscomp.array.from(arguments)
                            }, $jscomp.array.entries = function() {
                                return $jscomp.iteratorFromArray(this, function(e, t) {
                                    return [e, t]
                                })
                            }, $jscomp.array.installHelper_ = function(e, t) {
                                !Array.prototype[e] && Object.defineProperties && Object.defineProperty && Object.defineProperty(Array.prototype, e, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: t
                                })
                            }, $jscomp.array.entries$install = function() {
                                $jscomp.array.installHelper_("entries", $jscomp.array.entries)
                            }, $jscomp.array.keys = function() {
                                return $jscomp.iteratorFromArray(this, function(e) {
                                    return e
                                })
                            }, $jscomp.array.keys$install = function() {
                                $jscomp.array.installHelper_("keys", $jscomp.array.keys)
                            }, $jscomp.array.values = function() {
                                return $jscomp.iteratorFromArray(this, function(e, t) {
                                    return t
                                })
                            }, $jscomp.array.values$install = function() {
                                $jscomp.array.installHelper_("values", $jscomp.array.values)
                            }, $jscomp.array.copyWithin = function(e, t, o) {
                                var r = this.length;
                                if (e = Number(e), t = Number(t), o = Number(null != o ? o : r), e < t)
                                    for (o = Math.min(o, r); t < o;) t in this ? this[e++] = this[t++] : (delete this[e++], t++);
                                else
                                    for (e += (o = Math.min(o, r + t - e)) - t; t < o;) --o in this ? this[--e] = this[o] : delete this[e];
                                return this
                            }, $jscomp.array.copyWithin$install = function() {
                                $jscomp.array.installHelper_("copyWithin", $jscomp.array.copyWithin)
                            }, $jscomp.array.fill = function(e, t, o) {
                                var r = this.length || 0;
                                for (t < 0 && (t = Math.max(0, r + t)), (null == o || r < o) && (o = r), (o = Number(o)) < 0 && (o = Math.max(0, r + o)), t = Number(t || 0); t < o; t++) this[t] = e;
                                return this
                            }, $jscomp.array.fill$install = function() {
                                $jscomp.array.installHelper_("fill", $jscomp.array.fill)
                            }, $jscomp.array.find = function(e, t) {
                                return $jscomp.findInternal(this, e, t).v
                            }, $jscomp.array.find$install = function() {
                                $jscomp.array.installHelper_("find", $jscomp.array.find)
                            }, $jscomp.array.findIndex = function(e, t) {
                                return $jscomp.findInternal(this, e, t).i
                            }, $jscomp.array.findIndex$install = function() {
                                $jscomp.array.installHelper_("findIndex", $jscomp.array.findIndex)
                            }, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.Map$isConformant = function() {
                                if ($jscomp.ASSUME_NO_NATIVE_MAP) return !1;
                                var e = $jscomp.global.Map;
                                if (!e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                                try {
                                    var t = Object.seal({
                                            x: 4
                                        }),
                                        o = new e($jscomp.makeIterator([
                                            [t, "s"]
                                        ]));
                                    if ("s" != o.get(t) || 1 != o.size || o.get({
                                            x: 4
                                        }) || o.set({
                                            x: 4
                                        }, "t") != o || 2 != o.size) return !1;
                                    var r = o.entries(),
                                        o = r.next();
                                    return !o.done && o.value[0] == t && "s" == o.value[1] && !((o = r.next()).done || 4 != o.value[0].x || "t" != o.value[1] || !r.next().done)
                                } catch (e) {
                                    return !1
                                }
                            }, $jscomp.Map = function(e) {
                                if (this.data_ = {}, this.head_ = $jscomp.Map.createHead(), this.size = 0, e) {
                                    e = $jscomp.makeIterator(e);
                                    for (var t; !(t = e.next()).done;) t = t.value, this.set(t[0], t[1])
                                }
                            }, $jscomp.Map.prototype.set = function(e, t) {
                                var o = $jscomp.Map.maybeGetEntry(this, e);
                                return o.list || (o.list = this.data_[o.id] = []), o.entry ? o.entry.value = t : (o.entry = {
                                    next: this.head_,
                                    previous: this.head_.previous,
                                    head: this.head_,
                                    key: e,
                                    value: t
                                }, o.list.push(o.entry), this.head_.previous.next = o.entry, this.head_.previous = o.entry, this.size++), this
                            }, $jscomp.Map.prototype.delete = function(e) {
                                return !(!(e = $jscomp.Map.maybeGetEntry(this, e)).entry || !e.list || (e.list.splice(e.index, 1), e.list.length || delete this.data_[e.id], e.entry.previous.next = e.entry.next, e.entry.next.previous = e.entry.previous, e.entry.head = null, this.size--, 0))
                            }, $jscomp.Map.prototype.clear = function() {
                                this.data_ = {}, this.head_ = this.head_.previous = $jscomp.Map.createHead(), this.size = 0
                            }, $jscomp.Map.prototype.has = function(e) {
                                return !!$jscomp.Map.maybeGetEntry(this, e).entry
                            }, $jscomp.Map.prototype.get = function(e) {
                                return (e = $jscomp.Map.maybeGetEntry(this, e).entry) && e.value
                            }, $jscomp.Map.prototype.entries = function() {
                                return $jscomp.Map.makeIterator_(this, function(e) {
                                    return [e.key, e.value]
                                })
                            }, $jscomp.Map.prototype.keys = function() {
                                return $jscomp.Map.makeIterator_(this, function(e) {
                                    return e.key
                                })
                            }, $jscomp.Map.prototype.values = function() {
                                return $jscomp.Map.makeIterator_(this, function(e) {
                                    return e.value
                                })
                            }, $jscomp.Map.prototype.forEach = function(e, t) {
                                for (var o, r = this.entries(); !(o = r.next()).done;) o = o.value, e.call(t, o[1], o[0], this)
                            }, $jscomp.Map.maybeGetEntry = function(e, t) {
                                var o = $jscomp.Map.getId(t),
                                    r = e.data_[o];
                                if (r && Object.prototype.hasOwnProperty.call(e.data_, o))
                                    for (var i = 0; i < r.length; i++) {
                                        var n = r[i];
                                        if (t != t && n.key != n.key || t === n.key) return {
                                            id: o,
                                            list: r,
                                            index: i,
                                            entry: n
                                        }
                                    }
                                return {
                                    id: o,
                                    list: r,
                                    index: -1,
                                    entry: void 0
                                }
                            }, $jscomp.Map.makeIterator_ = function(e, t) {
                                var o = e.head_,
                                    r = {
                                        next: function() {
                                            if (o) {
                                                for (; o.head != e.head_;) o = o.previous;
                                                if (o.next != o.head) return o = o.next, {
                                                    done: !1,
                                                    value: t(o)
                                                };
                                                o = null
                                            }
                                            return {
                                                done: !0,
                                                value: void 0
                                            }
                                        }
                                    };
                                return $jscomp.initSymbol(), $jscomp.initSymbolIterator(), r[Symbol.iterator] = function() {
                                    return r
                                }, r
                            }, $jscomp.Map.mapIndex_ = 0, $jscomp.Map.createHead = function() {
                                var e = {};
                                return e.previous = e.next = e.head = e
                            }, $jscomp.Map.getId = function(e) {
                                if (!(e instanceof Object)) return "p_" + e;
                                if (!($jscomp.Map.idKey in e)) try {
                                    $jscomp.Map.defineProperty(e, $jscomp.Map.idKey, {
                                        value: ++$jscomp.Map.mapIndex_
                                    })
                                } catch (e) {}
                                return $jscomp.Map.idKey in e ? e[$jscomp.Map.idKey] : "o_ " + e
                            }, $jscomp.Map.defineProperty = Object.defineProperty ? function(e, t, o) {
                                Object.defineProperty(e, t, {
                                    value: String(o)
                                })
                            } : function(e, t, o) {
                                e[t] = String(o)
                            }, $jscomp.Map.Entry = function() {}, $jscomp.Map$install = function() {
                                $jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map$isConformant() ? $jscomp.Map = $jscomp.global.Map : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map.prototype[Symbol.iterator] = $jscomp.Map.prototype.entries, $jscomp.initSymbol(), $jscomp.Map.idKey = Symbol("map-id-key"), $jscomp.Map$install = function() {})
                            }, $jscomp.math = $jscomp.math || {}, $jscomp.math.clz32 = function(e) {
                                if (0 == (e = Number(e) >>> 0)) return 32;
                                var t = 0;
                                return 0 == (4294901760 & e) && (e <<= 16, t += 16), 0 == (4278190080 & e) && (e <<= 8, t += 8), 0 == (4026531840 & e) && (e <<= 4, t += 4), 0 == (3221225472 & e) && (e <<= 2, t += 2), 0 == (2147483648 & e) && t++, t
                            }, $jscomp.math.imul = function(e, t) {
                                var o = 65535 & (e = Number(e)),
                                    r = 65535 & (t = Number(t));
                                return o * r + ((e >>> 16 & 65535) * r + o * (t >>> 16 & 65535) << 16 >>> 0) | 0
                            }, $jscomp.math.sign = function(e) {
                                return 0 === (e = Number(e)) || isNaN(e) ? e : 0 < e ? 1 : -1
                            }, $jscomp.math.log10 = function(e) {
                                return Math.log(e) / Math.LN10
                            }, $jscomp.math.log2 = function(e) {
                                return Math.log(e) / Math.LN2
                            }, $jscomp.math.log1p = function(e) {
                                if ((e = Number(e)) < .25 && -.25 < e) {
                                    for (var t = e, o = 1, r = e, i = 0, n = 1; i != r;) r = (i = r) + (n *= -1) * (t *= e) / ++o;
                                    return r
                                }
                                return Math.log(1 + e)
                            }, $jscomp.math.expm1 = function(e) {
                                if ((e = Number(e)) < .25 && -.25 < e) {
                                    for (var t = e, o = 1, r = e, i = 0; i != r;) r = (i = r) + (t *= e / ++o);
                                    return r
                                }
                                return Math.exp(e) - 1
                            }, $jscomp.math.cosh = function(e) {
                                return e = Number(e), (Math.exp(e) + Math.exp(-e)) / 2
                            }, $jscomp.math.sinh = function(e) {
                                return 0 === (e = Number(e)) ? e : (Math.exp(e) - Math.exp(-e)) / 2
                            }, $jscomp.math.tanh = function(e) {
                                if (0 === (e = Number(e))) return e;
                                var t = (1 - (t = Math.exp(-2 * Math.abs(e)))) / (1 + t);
                                return e < 0 ? -t : t
                            }, $jscomp.math.acosh = function(e) {
                                return e = Number(e), Math.log(e + Math.sqrt(e * e - 1))
                            }, $jscomp.math.asinh = function(e) {
                                if (0 === (e = Number(e))) return e;
                                var t = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
                                return e < 0 ? -t : t
                            }, $jscomp.math.atanh = function(e) {
                                return e = Number(e), ($jscomp.math.log1p(e) - $jscomp.math.log1p(-e)) / 2
                            }, $jscomp.math.hypot = function(e, t, o) {
                                e = Number(e), t = Number(t);
                                for (var r, i, n = Math.max(Math.abs(e), Math.abs(t)), s = 2; s < arguments.length; s++) n = Math.max(n, Math.abs(arguments[s]));
                                if (1e100 < n || n < 1e-100) {
                                    for (i = (e /= n) * e + (t /= n) * t, s = 2; s < arguments.length; s++) i += (r = Number(arguments[s]) / n) * r;
                                    return Math.sqrt(i) * n
                                }
                                for (i = e * e + t * t, s = 2; s < arguments.length; s++) i += (r = Number(arguments[s])) * r;
                                return Math.sqrt(i)
                            }, $jscomp.math.trunc = function(e) {
                                if (e = Number(e), isNaN(e) || 1 / 0 === e || -1 / 0 === e || 0 === e) return e;
                                var t = Math.floor(Math.abs(e));
                                return e < 0 ? -t : t
                            }, $jscomp.math.cbrt = function(e) {
                                if (0 === e) return e;
                                e = Number(e);
                                var t = Math.pow(Math.abs(e), 1 / 3);
                                return e < 0 ? -t : t
                            }, $jscomp.number = $jscomp.number || {}, $jscomp.number.isFinite = function(e) {
                                return "number" == typeof e && !isNaN(e) && 1 / 0 !== e && -1 / 0 !== e
                            }, $jscomp.number.isInteger = function(e) {
                                return !!$jscomp.number.isFinite(e) && e === Math.floor(e)
                            }, $jscomp.number.isNaN = function(e) {
                                return "number" == typeof e && isNaN(e)
                            }, $jscomp.number.isSafeInteger = function(e) {
                                return $jscomp.number.isInteger(e) && Math.abs(e) <= $jscomp.number.MAX_SAFE_INTEGER
                            }, $jscomp.number.EPSILON = Math.pow(2, -52), $jscomp.number.MAX_SAFE_INTEGER = 9007199254740991, $jscomp.number.MIN_SAFE_INTEGER = -9007199254740991, $jscomp.object = $jscomp.object || {}, $jscomp.object.assign = function(e, t) {
                                for (var o = 1; o < arguments.length; o++) {
                                    var r = arguments[o];
                                    if (r)
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                                }
                                return e
                            }, $jscomp.object.is = function(e, t) {
                                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                            }, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.Set$isConformant = function() {
                                if ($jscomp.ASSUME_NO_NATIVE_SET) return !1;
                                var e = $jscomp.global.Set;
                                if (!e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                                try {
                                    var t = Object.seal({
                                            x: 4
                                        }),
                                        o = new e($jscomp.makeIterator([t]));
                                    if (!o.has(t) || 1 != o.size || o.add(t) != o || 1 != o.size || o.add({
                                            x: 4
                                        }) != o || 2 != o.size) return !1;
                                    var r = o.entries(),
                                        o = r.next();
                                    return !o.done && o.value[0] == t && o.value[1] == t && !(o = r.next()).done && o.value[0] != t && 4 == o.value[0].x && o.value[1] == o.value[0] && r.next().done
                                } catch (e) {
                                    return !1
                                }
                            }, $jscomp.Set = function(e) {
                                if (this.map_ = new $jscomp.Map, e) {
                                    e = $jscomp.makeIterator(e);
                                    for (var t; !(t = e.next()).done;) this.add(t.value)
                                }
                                this.size = this.map_.size
                            }, $jscomp.Set.prototype.add = function(e) {
                                return this.map_.set(e, e), this.size = this.map_.size, this
                            }, $jscomp.Set.prototype.delete = function(e) {
                                return e = this.map_.delete(e), this.size = this.map_.size, e
                            }, $jscomp.Set.prototype.clear = function() {
                                this.map_.clear(), this.size = 0
                            }, $jscomp.Set.prototype.has = function(e) {
                                return this.map_.has(e)
                            }, $jscomp.Set.prototype.entries = function() {
                                return this.map_.entries()
                            }, $jscomp.Set.prototype.values = function() {
                                return this.map_.values()
                            }, $jscomp.Set.prototype.forEach = function(t, o) {
                                var r = this;
                                this.map_.forEach(function(e) {
                                    return t.call(o, e, e, r)
                                })
                            }, $jscomp.Set$install = function() {
                                $jscomp.Map$install(), $jscomp.Set$isConformant() ? $jscomp.Set = $jscomp.global.Set : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Set.prototype[Symbol.iterator] = $jscomp.Set.prototype.values, $jscomp.Set$install = function() {})
                            }, $jscomp.string = $jscomp.string || {}, $jscomp.checkStringArgs = function(e, t, o) {
                                if (null == e) throw new TypeError("The 'this' value for String.prototype." + o + " must not be null or undefined");
                                if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + o + " must not be a regular expression");
                                return e + ""
                            }, $jscomp.string.fromCodePoint = function(e) {
                                for (var t = "", o = 0; o < arguments.length; o++) {
                                    var r = Number(arguments[o]);
                                    if (r < 0 || 1114111 < r || r !== Math.floor(r)) throw new RangeError("invalid_code_point " + r);
                                    r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode(r >>> 10 & 1023 | 55296), t += String.fromCharCode(1023 & r | 56320))
                                }
                                return t
                            }, $jscomp.string.repeat = function(e) {
                                var t = $jscomp.checkStringArgs(this, null, "repeat");
                                if (e < 0 || 1342177279 < e) throw new RangeError("Invalid count value");
                                e |= 0;
                                for (var o = ""; e;) 1 & e && (o += t), (e >>>= 1) && (t += t);
                                return o
                            }, $jscomp.string.repeat$install = function() {
                                String.prototype.repeat || (String.prototype.repeat = $jscomp.string.repeat)
                            }, $jscomp.string.codePointAt = function(e) {
                                var t = $jscomp.checkStringArgs(this, null, "codePointAt"),
                                    o = t.length;
                                if (0 <= (e = Number(e) || 0) && e < o) {
                                    e |= 0;
                                    var r = t.charCodeAt(e);
                                    return r < 55296 || 56319 < r || e + 1 === o || (e = t.charCodeAt(e + 1)) < 56320 || 57343 < e ? r : 1024 * (r - 55296) + e + 9216
                                }
                            }, $jscomp.string.codePointAt$install = function() {
                                String.prototype.codePointAt || (String.prototype.codePointAt = $jscomp.string.codePointAt)
                            }, $jscomp.string.includes = function(e, t) {
                                return -1 !== $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
                            }, $jscomp.string.includes$install = function() {
                                String.prototype.includes || (String.prototype.includes = $jscomp.string.includes)
                            }, $jscomp.string.startsWith = function(e, t) {
                                var o = $jscomp.checkStringArgs(this, e, "startsWith");
                                e += "";
                                for (var r = o.length, i = e.length, n = Math.max(0, Math.min(0 | t, o.length)), s = 0; s < i && n < r;)
                                    if (o[n++] != e[s++]) return !1;
                                return i <= s
                            }, $jscomp.string.startsWith$install = function() {
                                String.prototype.startsWith || (String.prototype.startsWith = $jscomp.string.startsWith)
                            }, $jscomp.string.endsWith = function(e, t) {
                                var o = $jscomp.checkStringArgs(this, e, "endsWith");
                                e += "", void 0 === t && (t = o.length);
                                for (var r = Math.max(0, Math.min(0 | t, o.length)), i = e.length; 0 < i && 0 < r;)
                                    if (o[--r] != e[--i]) return !1;
                                return i <= 0
                            }, $jscomp.string.endsWith$install = function() {
                                String.prototype.endsWith || (String.prototype.endsWith = $jscomp.string.endsWith)
                            };
                            var COMPILED = !0,
                                goog = goog || {};
                            goog.global = this, goog.isDef = function(e) {
                                return void 0 !== e
                            }, goog.exportPath_ = function(e, t, o) {
                                e = e.split("."), o = o || goog.global, e[0] in o || !o.execScript || o.execScript("var " + e[0]);
                                for (var r; e.length && (r = e.shift());) !e.length && goog.isDef(t) ? o[r] = t : o = o[r] || (o[r] = {})
                            }, goog.define = function(e, t) {
                                COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, e) ? t = goog.global.CLOSURE_UNCOMPILED_DEFINES[e] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (t = goog.global.CLOSURE_DEFINES[e])), goog.exportPath_(e, t)
                            }, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function(e) {
                                if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                                goog.constructNamespace_(e)
                            }, goog.constructNamespace_ = function(e, t) {
                                if (!COMPILED) {
                                    delete goog.implicitNamespaces_[e];
                                    for (var o = e;
                                        (o = o.substring(0, o.lastIndexOf("."))) && !goog.getObjectByName(o);) goog.implicitNamespaces_[o] = !0
                                }
                                goog.exportPath_(e, t)
                            }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(e) {
                                if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
                                if (!goog.isInModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly.");
                                if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
                                if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
                                    if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                                    delete goog.implicitNamespaces_[e]
                                }
                            }, goog.module.get = function(e) {
                                return goog.module.getInternal_(e)
                            }, goog.module.getInternal_ = function(e) {
                                if (!COMPILED) return goog.isProvided_(e) ? e in goog.loadedModules_ ? goog.loadedModules_[e] : goog.getObjectByName(e) : null
                            }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
                                return null != goog.moduleLoaderState_
                            }, goog.module.declareLegacyNamespace = function() {
                                if (!COMPILED && !goog.isInModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
                                if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
                                goog.moduleLoaderState_.declareLegacyNamespace = !0
                            }, goog.setTestOnly = function(e) {
                                if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
                            }, goog.forwardDeclare = function(e) {}, COMPILED || (goog.isProvided_ = function(e) {
                                return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
                            }, goog.implicitNamespaces_ = {
                                "goog.module": !0
                            }), goog.getObjectByName = function(e, t) {
                                for (var o, r = e.split("."), i = t || goog.global; o = r.shift();) {
                                    if (!goog.isDefAndNotNull(i[o])) return null;
                                    i = i[o]
                                }
                                return i
                            }, goog.globalize = function(e, t) {
                                var o, r = t || goog.global;
                                for (o in e) r[o] = e[o]
                            }, goog.addDependency = function(e, t, o, r) {
                                if (goog.DEPENDENCIES_ENABLED) {
                                    var i;
                                    e = e.replace(/\\/g, "/");
                                    for (var n = goog.dependencies_, s = 0; i = t[s]; s++) n.nameToPath[i] = e, n.pathIsModule[e] = !!r;
                                    for (r = 0; t = o[r]; r++) e in n.requires || (n.requires[e] = {}), n.requires[e][t] = !0
                                }
                            }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(e) {
                                goog.global.console && goog.global.console.error(e)
                            }, goog.require = function(e) {
                                if (!COMPILED) {
                                    if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(e), goog.isProvided_(e)) return goog.isInModuleLoader_() ? goog.module.getInternal_(e) : null;
                                    if (goog.ENABLE_DEBUG_LOADER) {
                                        var t = goog.getPathFromDeps_(e);
                                        if (t) return goog.writeScripts_(t), null
                                    }
                                    throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e)
                                }
                            }, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
                                throw Error("unimplemented abstract method")
                            }, goog.addSingletonGetter = function(e) {
                                e.getInstance = function() {
                                    return e.instance_ || (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
                                }
                            }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {
                                pathIsModule: {},
                                nameToPath: {},
                                requires: {},
                                visited: {},
                                written: {},
                                deferred: {}
                            }, goog.inHtmlDocument_ = function() {
                                var e = goog.global.document;
                                return null != e && "write" in e
                            }, goog.findBasePath_ = function() {
                                if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
                                else if (goog.inHtmlDocument_())
                                    for (var e = goog.global.document.getElementsByTagName("SCRIPT"), t = e.length - 1; 0 <= t; --t) {
                                        var o = e[t].src,
                                            r = -1 == (r = o.lastIndexOf("?")) ? o.length : r;
                                        if ("base.js" == o.substr(r - 7, 7)) {
                                            goog.basePath = o.substr(0, r - 7);
                                            break
                                        }
                                    }
                            }, goog.importScript_ = function(e, t) {
                                (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) && (goog.dependencies_.written[e] = !0)
                            }, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importModule_ = function(e) {
                                goog.importScript_("", 'goog.retrieveAndExecModule_("' + e + '");') && (goog.dependencies_.written[e] = !0)
                            }, goog.queuedModules_ = [], goog.wrapModule_ = function(e, t) {
                                return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + e + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + e + "\n"
                            }, goog.loadQueuedModules_ = function() {
                                var e = goog.queuedModules_.length;
                                if (0 < e) {
                                    var t = goog.queuedModules_;
                                    goog.queuedModules_ = [];
                                    for (var o = 0; o < e; o++) goog.maybeProcessDeferredPath_(t[o])
                                }
                            }, goog.maybeProcessDeferredDep_ = function(e) {
                                goog.isDeferredModule_(e) && goog.allDepsAreAvailable_(e) && (e = goog.getPathFromDeps_(e), goog.maybeProcessDeferredPath_(goog.basePath + e))
                            }, goog.isDeferredModule_ = function(e) {
                                return !(!(e = goog.getPathFromDeps_(e)) || !goog.dependencies_.pathIsModule[e]) && goog.basePath + e in goog.dependencies_.deferred
                            }, goog.allDepsAreAvailable_ = function(e) {
                                if ((e = goog.getPathFromDeps_(e)) && e in goog.dependencies_.requires)
                                    for (var t in goog.dependencies_.requires[e])
                                        if (!goog.isProvided_(t) && !goog.isDeferredModule_(t)) return !1;
                                return !0
                            }, goog.maybeProcessDeferredPath_ = function(e) {
                                var t;
                                e in goog.dependencies_.deferred && (t = goog.dependencies_.deferred[e], delete goog.dependencies_.deferred[e], goog.globalEval(t))
                            }, goog.loadModuleFromUrl = function(e) {
                                goog.retrieveAndExecModule_(e)
                            }, goog.loadModule = function(e) {
                                var t, o = goog.moduleLoaderState_;
                                try {
                                    if (goog.moduleLoaderState_ = {
                                            moduleName: void 0,
                                            declareLegacyNamespace: !1
                                        }, goog.isFunction(e)) t = e.call(goog.global, {});
                                    else {
                                        if (!goog.isString(e)) throw Error("Invalid module definition");
                                        t = goog.loadModuleFromSource_.call(goog.global, e)
                                    }
                                    var r = goog.moduleLoaderState_.moduleName;
                                    if (!goog.isString(r) || !r) throw Error('Invalid module name "' + r + '"');
                                    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(r, t) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(t), goog.loadedModules_[r] = t
                                } finally {
                                    goog.moduleLoaderState_ = o
                                }
                            }, goog.loadModuleFromSource_ = function(a) {
                                return eval(a), {}
                            }, goog.writeScriptSrcNode_ = function(e) {
                                goog.global.document.write('<script type="text/javascript" src="' + e + '"><\/script>')
                            }, goog.appendScriptSrcNode_ = function(e) {
                                var t = goog.global.document,
                                    o = t.createElement("script");
                                o.type = "text/javascript", o.src = e, o.defer = !1, o.async = !1, t.head.appendChild(o)
                            }, goog.writeScriptTag_ = function(e, t) {
                                if (goog.inHtmlDocument_()) {
                                    var o = goog.global.document;
                                    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == o.readyState) {
                                        if (/\bdeps.js$/.test(e)) return !1;
                                        throw Error('Cannot write "' + e + '" after document load')
                                    }
                                    var r = goog.IS_OLD_IE_;
                                    return void 0 === t ? r ? (r = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", o.write('<script type="text/javascript" src="' + e + '"' + r + "><\/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(e) : goog.writeScriptSrcNode_(e) : o.write('<script type="text/javascript">' + t + "<\/script>"), !0
                                }
                                return !1
                            }, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(e, t) {
                                return "complete" == e.readyState && goog.lastNonModuleScriptIndex_ == t && goog.loadQueuedModules_(), !0
                            }, goog.writeScripts_ = function(e) {
                                var r = [],
                                    i = {},
                                    n = goog.dependencies_;
                                for (function e(t) {
                                        if (!(t in n.written || t in n.visited)) {
                                            if (n.visited[t] = !0, t in n.requires)
                                                for (var o in n.requires[t])
                                                    if (!goog.isProvided_(o)) {
                                                        if (!(o in n.nameToPath)) throw Error("Undefined nameToPath for " + o);
                                                        e(n.nameToPath[o])
                                                    }
                                            t in i || (i[t] = !0, r.push(t))
                                        }
                                    }(e), e = 0; e < r.length; e++) {
                                    var t = r[e];
                                    goog.dependencies_.written[t] = !0
                                }
                                var o = goog.moduleLoaderState_;
                                for (goog.moduleLoaderState_ = null, e = 0; e < r.length; e++) {
                                    if (!(t = r[e])) throw goog.moduleLoaderState_ = o, Error("Undefined script input");
                                    n.pathIsModule[t] ? goog.importModule_(goog.basePath + t) : goog.importScript_(goog.basePath + t)
                                }
                                goog.moduleLoaderState_ = o
                            }, goog.getPathFromDeps_ = function(e) {
                                return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
                            }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.normalizePath_ = function(e) {
                                e = e.split("/");
                                for (var t = 0; t < e.length;) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
                                return e.join("/")
                            }, goog.loadFileSync_ = function(e) {
                                if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
                                var t = new goog.global.XMLHttpRequest;
                                return t.open("get", e, !1), t.send(), t.responseText
                            }, goog.retrieveAndExecModule_ = function(e) {
                                if (!COMPILED) {
                                    var t = e;
                                    e = goog.normalizePath_(e);
                                    var o = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
                                        r = goog.loadFileSync_(e);
                                    if (null == r) throw Error("load of " + e + "failed");
                                    r = goog.wrapModule_(e, r), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[t] = r, goog.queuedModules_.push(t)) : o(e, r)
                                }
                            }, goog.typeOf = function(e) {
                                var t = _typeof(e);
                                if ("object" == t) {
                                    if (!e) return "null";
                                    if (e instanceof Array) return "array";
                                    if (e instanceof Object) return t;
                                    var o = Object.prototype.toString.call(e);
                                    if ("[object Window]" == o) return "object";
                                    if ("[object Array]" == o || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                                    if ("[object Function]" == o || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                                } else if ("function" == t && void 0 === e.call) return "object";
                                return t
                            }, goog.isNull = function(e) {
                                return null === e
                            }, goog.isDefAndNotNull = function(e) {
                                return null != e
                            }, goog.isArray = function(e) {
                                return "array" == goog.typeOf(e)
                            }, goog.isArrayLike = function(e) {
                                var t = goog.typeOf(e);
                                return "array" == t || "object" == t && "number" == typeof e.length
                            }, goog.isDateLike = function(e) {
                                return goog.isObject(e) && "function" == typeof e.getFullYear
                            }, goog.isString = function(e) {
                                return "string" == typeof e
                            }, goog.isBoolean = function(e) {
                                return "boolean" == typeof e
                            }, goog.isNumber = function(e) {
                                return "number" == typeof e
                            }, goog.isFunction = function(e) {
                                return "function" == goog.typeOf(e)
                            }, goog.isObject = function(e) {
                                var t = _typeof(e);
                                return "object" == t && null != e || "function" == t
                            }, goog.getUid = function(e) {
                                return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
                            }, goog.hasUid = function(e) {
                                return !!e[goog.UID_PROPERTY_]
                            }, goog.removeUid = function(e) {
                                null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
                                try {
                                    delete e[goog.UID_PROPERTY_]
                                } catch (e) {}
                            }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
                                if ("object" != (o = goog.typeOf(e)) && "array" != o) return e;
                                if (e.clone) return e.clone();
                                var t, o = "array" == o ? [] : {};
                                for (t in e) o[t] = goog.cloneObject(e[t]);
                                return o
                            }, goog.bindNative_ = function(e, t, o) {
                                return e.call.apply(e.bind, arguments)
                            }, goog.bindJs_ = function(t, o, e) {
                                if (!t) throw Error();
                                if (2 < arguments.length) {
                                    var r = Array.prototype.slice.call(arguments, 2);
                                    return function() {
                                        var e = Array.prototype.slice.call(arguments);
                                        return Array.prototype.unshift.apply(e, r), t.apply(o, e)
                                    }
                                }
                                return function() {
                                    return t.apply(o, arguments)
                                }
                            }, goog.bind = function(e, t, o) {
                                return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
                            }, goog.partial = function(t, e) {
                                var o = Array.prototype.slice.call(arguments, 1);
                                return function() {
                                    var e = o.slice();
                                    return e.push.apply(e, arguments), t.apply(this, e)
                                }
                            }, goog.mixin = function(e, t) {
                                for (var o in t) e[o] = t[o]
                            }, goog.now = goog.TRUSTED_SITE && Date.now || function() {
                                return +new Date
                            }, goog.globalEval = function(e) {
                                if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
                                else {
                                    if (!goog.global.eval) throw Error("goog.globalEval not available");
                                    if (null == goog.evalWorksForGlobals_)
                                        if (goog.global.eval("var _evalTest_ = 1;"), void 0 !== goog.global._evalTest_) {
                                            try {
                                                delete goog.global._evalTest_
                                            } catch (e) {}
                                            goog.evalWorksForGlobals_ = !0
                                        } else goog.evalWorksForGlobals_ = !1;
                                    var t, o;
                                    goog.evalWorksForGlobals_ ? goog.global.eval(e) : ((o = (t = goog.global.document).createElement("SCRIPT")).type = "text/javascript", o.defer = !1, o.appendChild(t.createTextNode(e)), t.body.appendChild(o), t.body.removeChild(o))
                                }
                            }, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
                                function r(e) {
                                    return goog.cssNameMapping_[e] || e
                                }
                                var o = function(e) {
                                        e = e.split("-");
                                        for (var t = [], o = 0; o < e.length; o++) t.push(r(e[o]));
                                        return t.join("-")
                                    },
                                    o = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? r : o : function(e) {
                                        return e
                                    };
                                return t ? e + "-" + o(t) : o(e)
                            }, goog.setCssNameMapping = function(e, t) {
                                goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
                            }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(e, o) {
                                return o && (e = e.replace(/\{\$([^}]+)}/g, function(e, t) {
                                    return null != o && t in o ? o[t] : e
                                })), e
                            }, goog.getMsgWithFallback = function(e, t) {
                                return e
                            }, goog.exportSymbol = function(e, t, o) {
                                goog.exportPath_(e, t, o)
                            }, goog.exportProperty = function(e, t, o) {
                                e[t] = o
                            }, goog.inherits = function(e, n) {
                                function t() {}
                                t.prototype = n.prototype, e.superClass_ = n.prototype, e.prototype = new t, (e.prototype.constructor = e).base = function(e, t, o) {
                                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                    return n.prototype[t].apply(e, r)
                                }
                            }, goog.base = function(e, t, o) {
                                var r = arguments.callee.caller;
                                if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !r) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
                                if (r.superClass_) {
                                    for (var i = Array(arguments.length - 1), n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                                    return r.superClass_.constructor.apply(e, i)
                                }
                                for (i = Array(arguments.length - 2), n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                                n = !1;
                                for (var s = e.constructor; s; s = s.superClass_ && s.superClass_.constructor)
                                    if (s.prototype[t] === r) n = !0;
                                    else if (n) return s.prototype[t].apply(e, i);
                                if (e[t] === r) return e.constructor.prototype[t].apply(e, i);
                                throw Error("goog.base called from a method of one name to a method of a different name")
                            }, goog.scope = function(e) {
                                e.call(goog.global)
                            }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(e, t) {
                                var o = t.constructor,
                                    r = t.statics;
                                return o && o != Object.prototype.constructor || (o = function() {
                                    throw Error("cannot instantiate an interface (no constructor defined).")
                                }), o = goog.defineClass.createSealingConstructor_(o, e), e && goog.inherits(o, e), delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(o.prototype, t), null != r && (r instanceof Function ? r(o) : goog.defineClass.applyProperties_(o, r)), o
                            }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(o, e) {
                                return !(goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) || e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] ? o : function e() {
                                    var t = o.apply(this, arguments) || this;
                                    return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_], this.constructor === e && Object.seal(t), t
                                }
                            }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function(e, t) {
                                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++) o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r], Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }, goog.tagUnsealableClass = function(e) {
                                !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
                            }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", goog.dom = {}, goog.dom.NodeType = {
                                ELEMENT: 1,
                                ATTRIBUTE: 2,
                                TEXT: 3,
                                CDATA_SECTION: 4,
                                ENTITY_REFERENCE: 5,
                                ENTITY: 6,
                                PROCESSING_INSTRUCTION: 7,
                                COMMENT: 8,
                                DOCUMENT: 9,
                                DOCUMENT_TYPE: 10,
                                DOCUMENT_FRAGMENT: 11,
                                NOTATION: 12
                            }, goog.debug = {}, goog.debug.Error = function(e) {
                                var t;
                                Error.captureStackTrace ? Error.captureStackTrace(this, goog.debug.Error) : (t = Error().stack) && (this.stack = t), e && (this.message = String(e)), this.reportErrorToServer = !0
                            }, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.string = {}, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {
                                NBSP: "Â "
                            }, goog.string.startsWith = function(e, t) {
                                return 0 == e.lastIndexOf(t, 0)
                            }, goog.string.endsWith = function(e, t) {
                                var o = e.length - t.length;
                                return 0 <= o && e.indexOf(t, o) == o
                            }, goog.string.caseInsensitiveStartsWith = function(e, t) {
                                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
                            }, goog.string.caseInsensitiveEndsWith = function(e, t) {
                                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
                            }, goog.string.caseInsensitiveEquals = function(e, t) {
                                return e.toLowerCase() == t.toLowerCase()
                            }, goog.string.subs = function(e, t) {
                                for (var o = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < o.length;) r += o.shift() + i.shift();
                                return r + o.join("%s")
                            }, goog.string.collapseWhitespace = function(e) {
                                return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
                            }, goog.string.isEmptyOrWhitespace = function(e) {
                                return /^[\s\xa0]*$/.test(e)
                            }, goog.string.isEmptyString = function(e) {
                                return 0 == e.length
                            }, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(e) {
                                return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
                            }, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(e) {
                                return !/[^\t\n\r ]/.test(e)
                            }, goog.string.isAlpha = function(e) {
                                return !/[^a-zA-Z]/.test(e)
                            }, goog.string.isNumeric = function(e) {
                                return !/[^0-9]/.test(e)
                            }, goog.string.isAlphaNumeric = function(e) {
                                return !/[^a-zA-Z0-9]/.test(e)
                            }, goog.string.isSpace = function(e) {
                                return " " == e
                            }, goog.string.isUnicodeChar = function(e) {
                                return 1 == e.length && " " <= e && e <= "~" || "Â€" <= e && e <= "ï¿½"
                            }, goog.string.stripNewlines = function(e) {
                                return e.replace(/(\r\n|\r|\n)+/g, " ")
                            }, goog.string.canonicalizeNewlines = function(e) {
                                return e.replace(/(\r\n|\r|\n)/g, "\n")
                            }, goog.string.normalizeWhitespace = function(e) {
                                return e.replace(/\xa0|\s/g, " ")
                            }, goog.string.normalizeSpaces = function(e) {
                                return e.replace(/\xa0|[ \t]+/g, " ")
                            }, goog.string.collapseBreakingSpaces = function(e) {
                                return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
                            }, goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
                                return e.trim()
                            } : function(e) {
                                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            }, goog.string.trimLeft = function(e) {
                                return e.replace(/^[\s\xa0]+/, "")
                            }, goog.string.trimRight = function(e) {
                                return e.replace(/[\s\xa0]+$/, "")
                            }, goog.string.caseInsensitiveCompare = function(e, t) {
                                e = String(e).toLowerCase(), t = String(t).toLowerCase();
                                return e < t ? -1 : e == t ? 0 : 1
                            }, goog.string.numberAwareCompare_ = function(e, t, o) {
                                if (e == t) return 0;
                                if (!e) return -1;
                                if (!t) return 1;
                                for (var r = e.toLowerCase().match(o), i = t.toLowerCase().match(o), n = Math.min(r.length, i.length), s = 0; s < n; s++) {
                                    o = r[s];
                                    var a = i[s];
                                    if (o != a) return e = parseInt(o, 10), !isNaN(e) && (t = parseInt(a, 10), !isNaN(t) && e - t) ? e - t : o < a ? -1 : 1
                                }
                                return r.length != i.length ? r.length - i.length : e < t ? -1 : 1
                            }, goog.string.intAwareCompare = function(e, t) {
                                return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
                            }, goog.string.floatAwareCompare = function(e, t) {
                                return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
                            }, goog.string.numerateCompare = goog.string.floatAwareCompare, goog.string.urlEncode = function(e) {
                                return encodeURIComponent(String(e))
                            }, goog.string.urlDecode = function(e) {
                                return decodeURIComponent(e.replace(/\+/g, " "))
                            }, goog.string.newLineToBr = function(e, t) {
                                return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
                            }, goog.string.htmlEscape = function(e, t) {
                                if (t) e = e.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;"));
                                else {
                                    if (!goog.string.ALL_RE_.test(e)) return e; - 1 != e.indexOf("&") && (e = e.replace(goog.string.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(goog.string.NULL_RE_, "&#0;")), goog.string.DETECT_DOUBLE_ESCAPING && -1 != e.indexOf("e") && (e = e.replace(goog.string.E_RE_, "&#101;"))
                                }
                                return e
                            }, goog.string.AMP_RE_ = /&/g, goog.string.LT_RE_ = /</g, goog.string.GT_RE_ = />/g, goog.string.QUOT_RE_ = /"/g, goog.string.SINGLE_QUOTE_RE_ = /'/g, goog.string.NULL_RE_ = /\x00/g, goog.string.E_RE_ = /e/g, goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/, goog.string.unescapeEntities = function(e) {
                                return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
                            }, goog.string.unescapeEntitiesWithDocument = function(e, t) {
                                return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
                            }, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
                                var r = {
                                        "&amp;": "&",
                                        "&lt;": "<",
                                        "&gt;": ">",
                                        "&quot;": '"'
                                    },
                                    i = (t || goog.global.document).createElement("div");
                                return e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
                                    var o = r[e];
                                    return o || ("#" == t.charAt(0) && (t = Number("0" + t.substr(1)), isNaN(t) || (o = String.fromCharCode(t))), o || (i.innerHTML = e + " ", o = i.firstChild.nodeValue.slice(0, -1)), r[e] = o)
                                })
                            }, goog.string.unescapePureXmlEntities_ = function(e) {
                                return e.replace(/&([^;]+);/g, function(e, t) {
                                    switch (t) {
                                        case "amp":
                                            return "&";
                                        case "lt":
                                            return "<";
                                        case "gt":
                                            return ">";
                                        case "quot":
                                            return '"';
                                        default:
                                            if ("#" == t.charAt(0)) {
                                                var o = Number("0" + t.substr(1));
                                                if (!isNaN(o)) return String.fromCharCode(o)
                                            }
                                            return e
                                    }
                                })
                            }, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
                                return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
                            }, goog.string.preserveSpaces = function(e) {
                                return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
                            }, goog.string.stripQuotes = function(e, t) {
                                for (var o = t.length, r = 0; r < o; r++) {
                                    var i = 1 == o ? t : t.charAt(r);
                                    if (e.charAt(0) == i && e.charAt(e.length - 1) == i) return e.substring(1, e.length - 1)
                                }
                                return e
                            }, goog.string.truncate = function(e, t, o) {
                                return o && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), o && (e = goog.string.htmlEscape(e)), e
                            }, goog.string.truncateMiddle = function(e, t, o, r) {
                                var i;
                                return o && (e = goog.string.unescapeEntities(e)), r && e.length > t ? (t < r && (r = t), i = e.length - r, e = e.substring(0, t - r) + "..." + e.substring(i)) : e.length > t && (r = Math.floor(t / 2), i = e.length - r, e = e.substring(0, r + t % 2) + "..." + e.substring(i)), o && (e = goog.string.htmlEscape(e)), e
                            }, goog.string.specialEscapeChars_ = {
                                "\0": "\\0",
                                "\b": "\\b",
                                "\f": "\\f",
                                "\n": "\\n",
                                "\r": "\\r",
                                "\t": "\\t",
                                "\v": "\\x0B",
                                '"': '\\"',
                                "\\": "\\\\",
                                "<": "<"
                            }, goog.string.jsEscapeCache_ = {
                                "'": "\\'"
                            }, goog.string.quote = function(e) {
                                e = String(e);
                                for (var t = ['"'], o = 0; o < e.length; o++) {
                                    var r = e.charAt(o),
                                        i = r.charCodeAt(0);
                                    t[o + 1] = goog.string.specialEscapeChars_[r] || (31 < i && i < 127 ? r : goog.string.escapeChar(r))
                                }
                                return t.push('"'), t.join("")
                            }, goog.string.escapeString = function(e) {
                                for (var t = [], o = 0; o < e.length; o++) t[o] = goog.string.escapeChar(e.charAt(o));
                                return t.join("")
                            }, goog.string.escapeChar = function(e) {
                                if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
                                if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
                                var t, o = e.charCodeAt(0);
                                return 31 < o && o < 127 ? t = e : (o < 256 ? (t = "\\x", (o < 16 || 256 < o) && (t += "0")) : (t = "\\u", o < 4096 && (t += "0")), t += o.toString(16).toUpperCase()), goog.string.jsEscapeCache_[e] = t
                            }, goog.string.contains = function(e, t) {
                                return -1 != e.indexOf(t)
                            }, goog.string.caseInsensitiveContains = function(e, t) {
                                return goog.string.contains(e.toLowerCase(), t.toLowerCase())
                            }, goog.string.countOf = function(e, t) {
                                return e && t ? e.split(t).length - 1 : 0
                            }, goog.string.removeAt = function(e, t, o) {
                                var r = e;
                                return 0 <= t && t < e.length && 0 < o && (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)), r
                            }, goog.string.remove = function(e, t) {
                                t = new RegExp(goog.string.regExpEscape(t), "");
                                return e.replace(t, "")
                            }, goog.string.removeAll = function(e, t) {
                                t = new RegExp(goog.string.regExpEscape(t), "g");
                                return e.replace(t, "")
                            }, goog.string.regExpEscape = function(e) {
                                return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
                            }, goog.string.repeat = String.prototype.repeat ? function(e, t) {
                                return e.repeat(t)
                            } : function(e, t) {
                                return Array(t + 1).join(e)
                            }, goog.string.padNumber = function(e, t, o) {
                                return -1 == (o = (e = goog.isDef(o) ? e.toFixed(o) : String(e)).indexOf(".")) && (o = e.length), goog.string.repeat("0", Math.max(0, t - o)) + e
                            }, goog.string.makeSafe = function(e) {
                                return null == e ? "" : String(e)
                            }, goog.string.buildString = function(e) {
                                return Array.prototype.join.call(arguments, "")
                            }, goog.string.getRandomString = function() {
                                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
                            }, goog.string.compareVersions = function(e, t) {
                                for (var o = 0, r = goog.string.trim(String(e)).split("."), i = goog.string.trim(String(t)).split("."), n = Math.max(r.length, i.length), s = 0; 0 == o && s < n; s++) {
                                    var a = r[s] || "",
                                        p = i[s] || "",
                                        l = RegExp("(\\d*)(\\D*)", "g"),
                                        g = RegExp("(\\d*)(\\D*)", "g");
                                    do {
                                        var u = l.exec(a) || ["", "", ""],
                                            c = g.exec(p) || ["", "", ""];
                                        if (0 == u[0].length && 0 == c[0].length) break;
                                        o = 0 == u[1].length ? 0 : parseInt(u[1], 10);
                                        var d = 0 == c[1].length ? 0 : parseInt(c[1], 10),
                                            o = goog.string.compareElements_(o, d) || goog.string.compareElements_(0 == u[2].length, 0 == c[2].length) || goog.string.compareElements_(u[2], c[2])
                                    } while (0 == o)
                                }
                                return o
                            }, goog.string.compareElements_ = function(e, t) {
                                return e < t ? -1 : t < e ? 1 : 0
                            }, goog.string.hashCode = function(e) {
                                for (var t = 0, o = 0; o < e.length; ++o) t = 31 * t + e.charCodeAt(o) >>> 0;
                                return t
                            }, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
                                return "goog_" + goog.string.uniqueStringCounter_++
                            }, goog.string.toNumber = function(e) {
                                var t = Number(e);
                                return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
                            }, goog.string.isLowerCamelCase = function(e) {
                                return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
                            }, goog.string.isUpperCamelCase = function(e) {
                                return /^([A-Z][a-z]*)+$/.test(e)
                            }, goog.string.toCamelCase = function(e) {
                                return String(e).replace(/\-([a-z])/g, function(e, t) {
                                    return t.toUpperCase()
                                })
                            }, goog.string.toSelectorCase = function(e) {
                                return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
                            }, goog.string.toTitleCase = function(e, t) {
                                t = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
                                return e.replace(new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"), function(e, t, o) {
                                    return t + o.toUpperCase()
                                })
                            }, goog.string.capitalize = function(e) {
                                return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
                            }, goog.string.parseInt = function(e) {
                                return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
                            }, goog.string.splitLimit = function(e, t, o) {
                                e = e.split(t);
                                for (var r = []; 0 < o && e.length;) r.push(e.shift()), o--;
                                return e.length && r.push(e.join(t)), r
                            }, goog.string.editDistance = function(e, t) {
                                var o = [],
                                    r = [];
                                if (e == t) return 0;
                                if (!e.length || !t.length) return Math.max(e.length, t.length);
                                for (var i = 0; i < t.length + 1; i++) o[i] = i;
                                for (i = 0; i < e.length; i++) {
                                    r[0] = i + 1;
                                    for (var n = 0; n < t.length; n++) r[n + 1] = Math.min(r[n] + 1, o[n + 1] + 1, o[n] + Number(e[i] != t[n]));
                                    for (n = 0; n < o.length; n++) o[n] = r[n]
                                }
                                return r[t.length]
                            }, goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
                                t.unshift(e), goog.debug.Error.call(this, goog.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
                            }, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
                                throw e
                            }, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.doAssertFailure_ = function(e, t, o, r) {
                                var i, n = "Assertion failed";
                                o ? (n = n + ": " + o, i = r) : e && (n += ": " + e, i = t), e = new goog.asserts.AssertionError("" + n, i || []), goog.asserts.errorHandler_(e)
                            }, goog.asserts.setErrorHandler = function(e) {
                                goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
                            }, goog.asserts.assert = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.fail = function(e, t) {
                                goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
                            }, goog.asserts.assertNumber = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertString = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertFunction = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertObject = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertArray = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertBoolean = function(e, t, o) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertElement = function(e, t, o) {
                                return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertInstanceof = function(e, t, o, r) {
                                return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], o, Array.prototype.slice.call(arguments, 3)), e
                            }, goog.asserts.assertObjectPrototypeIsIntact = function() {
                                for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
                            }, goog.asserts.getType_ = function(e) {
                                return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : _typeof(e)
                            };
                            var jspb = {
                                    Map: function(e, t) {
                                        this.arr_ = e, this.valueCtor_ = t, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_()
                                    }
                                },
                                zA, AA;
                            jspb.Map.prototype.loadFromArray_ = function() {
                                for (var e = 0; e < this.arr_.length; e++) {
                                    var t = this.arr_[e],
                                        o = t[0];
                                    this.map_[o.toString()] = new jspb.Map.Entry_(o, t[1])
                                }
                                this.arrClean = !0
                            }, jspb.Map.prototype.toArray = function() {
                                if (this.arrClean) {
                                    if (this.valueCtor_) {
                                        var e, t, o = this.map_;
                                        for (e in o) !Object.prototype.hasOwnProperty.call(o, e) || (t = o[e].valueWrapper) && t.toArray()
                                    }
                                } else {
                                    for (this.arr_.length = 0, (o = this.stringKeys_()).sort(), e = 0; e < o.length; e++) {
                                        var r = this.map_[o[e]];
                                        (t = r.valueWrapper) && t.toArray(), this.arr_.push([r.key, r.value])
                                    }
                                    this.arrClean = !0
                                }
                                return this.arr_
                            }, jspb.Map.prototype.toObject = function(e, t) {
                                for (var o = this.toArray(), r = [], i = 0; i < o.length; i++) {
                                    var n = this.map_[o[i][0].toString()];
                                    this.wrapEntry_(n);
                                    var s = n.valueWrapper;
                                    s ? (goog.asserts.assert(t), r.push([n.key, t(e, s)])) : r.push([n.key, n.value])
                                }
                                return r
                            }, jspb.Map.fromObject = function(e, t, o) {
                                t = new jspb.Map([], t);
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r][0],
                                        n = o(e[r][1]);
                                    t.set(i, n)
                                }
                                return t
                            }, jspb.Map.ArrayIteratorIterable_ = function(e) {
                                this.idx_ = 0, this.arr_ = e
                            }, jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
                                return this.idx_ < this.arr_.length ? {
                                    done: !1,
                                    value: this.arr_[this.idx_++]
                                } : {
                                    done: !0,
                                    value: void 0
                                }
                            }, $jscomp.initSymbol(), "undefined" != typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
                                return this
                            }), jspb.Map.prototype.getLength = function() {
                                return this.stringKeys_().length
                            }, jspb.Map.prototype.clear = function() {
                                this.map_ = {}, this.arrClean = !1
                            }, jspb.Map.prototype.del = function(e) {
                                e = e.toString();
                                var t = this.map_.hasOwnProperty(e);
                                return delete this.map_[e], this.arrClean = !1, t
                            }, jspb.Map.prototype.getEntryList = function() {
                                var e = [],
                                    t = this.stringKeys_();
                                t.sort();
                                for (var o = 0; o < t.length; o++) {
                                    var r = this.map_[t[o]];
                                    e.push([r.key, r.value])
                                }
                                return e
                            }, jspb.Map.prototype.entries = function() {
                                var e = [],
                                    t = this.stringKeys_();
                                t.sort();
                                for (var o = 0; o < t.length; o++) {
                                    var r = this.map_[t[o]];
                                    e.push([r.key, this.wrapEntry_(r)])
                                }
                                return new jspb.Map.ArrayIteratorIterable_(e)
                            }, jspb.Map.prototype.keys = function() {
                                var e = [],
                                    t = this.stringKeys_();
                                t.sort();
                                for (var o = 0; o < t.length; o++) e.push(this.map_[t[o]].key);
                                return new jspb.Map.ArrayIteratorIterable_(e)
                            }, jspb.Map.prototype.values = function() {
                                var e = [],
                                    t = this.stringKeys_();
                                t.sort();
                                for (var o = 0; o < t.length; o++) e.push(this.wrapEntry_(this.map_[t[o]]));
                                return new jspb.Map.ArrayIteratorIterable_(e)
                            }, jspb.Map.prototype.forEach = function(e, t) {
                                var o = this.stringKeys_();
                                o.sort();
                                for (var r = 0; r < o.length; r++) {
                                    var i = this.map_[o[r]];
                                    e.call(t, this.wrapEntry_(i), i.key, this)
                                }
                            }, jspb.Map.prototype.set = function(e, t) {
                                var o = new jspb.Map.Entry_(e);
                                return this.valueCtor_ ? (o.valueWrapper = t, o.value = t.toArray()) : o.value = t, this.map_[e.toString()] = o, this.arrClean = !1, this
                            }, jspb.Map.prototype.wrapEntry_ = function(e) {
                                return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), e.valueWrapper) : e.value
                            }, jspb.Map.prototype.get = function(e) {
                                if (e = this.map_[e.toString()]) return this.wrapEntry_(e)
                            }, jspb.Map.prototype.has = function(e) {
                                return e.toString() in this.map_
                            }, jspb.Map.prototype.serializeBinary = function(e, t, o, r, i) {
                                var n = this.stringKeys_();
                                n.sort();
                                for (var s = 0; s < n.length; s++) {
                                    var a = this.map_[n[s]];
                                    t.beginSubMessage(e), o.call(t, 1, a.key), this.valueCtor_ ? r.call(t, 2, this.wrapEntry_(a), i) : r.call(t, 2, a.value), t.endSubMessage()
                                }
                            }, jspb.Map.deserializeBinary = function(e, t, o, r, i, n) {
                                for (var s = void 0; t.nextField() && !t.isEndGroup();) {
                                    var a = t.getFieldNumber();
                                    1 == a ? n = o.call(t) : 2 == a && (e.valueCtor_ ? (goog.asserts.assert(i), s = new e.valueCtor_, r.call(t, s, i)) : s = r.call(t))
                                }
                                goog.asserts.assert(null != n), goog.asserts.assert(null != s), e.set(n, s)
                            }, jspb.Map.prototype.stringKeys_ = function() {
                                var e, t = this.map_,
                                    o = [];
                                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && o.push(e);
                                return o
                            }, jspb.Map.Entry_ = function(e, t) {
                                this.key = e, this.value = t, this.valueWrapper = void 0
                            }, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, goog.array.peek = function(e) {
                                return e[e.length - 1]
                            }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, o)
                            } : function(e, t, o) {
                                if (o = null == o ? 0 : o < 0 ? Math.max(0, e.length + o) : o, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, o) : -1;
                                for (; o < e.length; o++)
                                    if (o in e && e[o] === t) return o;
                                return -1
                            }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
                            } : function(e, t, o) {
                                if ((o = null == o ? e.length - 1 : o) < 0 && (o = Math.max(0, e.length + o)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, o) : -1;
                                for (; 0 <= o; o--)
                                    if (o in e && e[o] === t) return o;
                                return -1
                            }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(e, t, o) {
                                goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, o)
                            } : function(e, t, o) {
                                for (var r = e.length, i = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++) n in i && t.call(o, i[n], n, e)
                            }, goog.array.forEachRight = function(e, t, o) {
                                var r = e.length,
                                    i = goog.isString(e) ? e.split("") : e;
                                for (--r; 0 <= r; --r) r in i && t.call(o, i[r], r, e)
                            }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, o)
                            } : function(e, t, o) {
                                for (var r, i = e.length, n = [], s = 0, a = goog.isString(e) ? e.split("") : e, p = 0; p < i; p++) p in a && (r = a[p], t.call(o, r, p, e) && (n[s++] = r));
                                return n
                            }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, o)
                            } : function(e, t, o) {
                                for (var r = e.length, i = Array(r), n = goog.isString(e) ? e.split("") : e, s = 0; s < r; s++) s in n && (i[s] = t.call(o, n[s], s, e));
                                return i
                            }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(e, t, o, r) {
                                return goog.asserts.assert(null != e.length), r && (t = goog.bind(t, r)), Array.prototype.reduce.call(e, t, o)
                            } : function(o, r, e, i) {
                                var n = e;
                                return goog.array.forEach(o, function(e, t) {
                                    n = r.call(i, n, e, t, o)
                                }), n
                            }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(e, t, o, r) {
                                return goog.asserts.assert(null != e.length), goog.asserts.assert(null != t), r && (t = goog.bind(t, r)), Array.prototype.reduceRight.call(e, t, o)
                            } : function(o, r, e, i) {
                                var n = e;
                                return goog.array.forEachRight(o, function(e, t) {
                                    n = r.call(i, n, e, t, o)
                                }), n
                            }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, o)
                            } : function(e, t, o) {
                                for (var r = e.length, i = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                                    if (n in i && t.call(o, i[n], n, e)) return !0;
                                return !1
                            }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(e, t, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, o)
                            } : function(e, t, o) {
                                for (var r = e.length, i = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                                    if (n in i && !t.call(o, i[n], n, e)) return !1;
                                return !0
                            }, goog.array.count = function(e, r, i) {
                                var n = 0;
                                return goog.array.forEach(e, function(e, t, o) {
                                    r.call(i, e, t, o) && ++n
                                }, i), n
                            }, goog.array.find = function(e, t, o) {
                                return (t = goog.array.findIndex(e, t, o)) < 0 ? null : goog.isString(e) ? e.charAt(t) : e[t]
                            }, goog.array.findIndex = function(e, t, o) {
                                for (var r = e.length, i = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                                    if (n in i && t.call(o, i[n], n, e)) return n;
                                return -1
                            }, goog.array.findRight = function(e, t, o) {
                                return (t = goog.array.findIndexRight(e, t, o)) < 0 ? null : goog.isString(e) ? e.charAt(t) : e[t]
                            }, goog.array.findIndexRight = function(e, t, o) {
                                var r = e.length,
                                    i = goog.isString(e) ? e.split("") : e;
                                for (--r; 0 <= r; r--)
                                    if (r in i && t.call(o, i[r], r, e)) return r;
                                return -1
                            }, goog.array.contains = function(e, t) {
                                return 0 <= goog.array.indexOf(e, t)
                            }, goog.array.isEmpty = function(e) {
                                return 0 == e.length
                            }, goog.array.clear = function(e) {
                                if (!goog.isArray(e))
                                    for (var t = e.length - 1; 0 <= t; t--) delete e[t];
                                e.length = 0
                            }, goog.array.insert = function(e, t) {
                                goog.array.contains(e, t) || e.push(t)
                            }, goog.array.insertAt = function(e, t, o) {
                                goog.array.splice(e, o, 0, t)
                            }, goog.array.insertArrayAt = function(e, t, o) {
                                goog.partial(goog.array.splice, e, o, 0).apply(null, t)
                            }, goog.array.insertBefore = function(e, t, o) {
                                var r;
                                2 == arguments.length || (r = goog.array.indexOf(e, o)) < 0 ? e.push(t) : goog.array.insertAt(e, t, r)
                            }, goog.array.remove = function(e, t) {
                                var o = goog.array.indexOf(e, t);
                                return (t = 0 <= o) && goog.array.removeAt(e, o), t
                            }, goog.array.removeAt = function(e, t) {
                                return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
                            }, goog.array.removeIf = function(e, t, o) {
                                return 0 <= (t = goog.array.findIndex(e, t, o)) && (goog.array.removeAt(e, t), !0)
                            }, goog.array.removeAllIf = function(o, r, i) {
                                var n = 0;
                                return goog.array.forEachRight(o, function(e, t) {
                                    r.call(i, e, t, o) && goog.array.removeAt(o, t) && n++
                                }), n
                            }, goog.array.concat = function(e) {
                                return Array.prototype.concat.apply(Array.prototype, arguments)
                            }, goog.array.join = function(e) {
                                return Array.prototype.concat.apply(Array.prototype, arguments)
                            }, goog.array.toArray = function(e) {
                                var t = e.length;
                                if (0 < t) {
                                    for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r];
                                    return o
                                }
                                return []
                            }, goog.array.clone = goog.array.toArray, goog.array.extend = function(e, t) {
                                for (var o = 1; o < arguments.length; o++) {
                                    var r = arguments[o];
                                    if (goog.isArrayLike(r)) {
                                        var i = e.length || 0,
                                            n = r.length || 0;
                                        e.length = i + n;
                                        for (var s = 0; s < n; s++) e[i + s] = r[s]
                                    } else e.push(r)
                                }
                            }, goog.array.splice = function(e, t, o, r) {
                                return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
                            }, goog.array.slice = function(e, t, o) {
                                return goog.asserts.assert(null != e.length), arguments.length <= 2 ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, o)
                            }, goog.array.removeDuplicates = function(e, t, o) {
                                t = t || e;
                                var r = function(e) {
                                    return goog.isObject(e) ? "o" + goog.getUid(e) : _typeof(e).charAt(0) + e
                                };
                                o = o || r, r = {};
                                for (var i = 0, n = 0; n < e.length;) {
                                    var s = e[n++],
                                        a = o(s);
                                    Object.prototype.hasOwnProperty.call(r, a) || (r[a] = !0, t[i++] = s)
                                }
                                t.length = i
                            }, goog.array.binarySearch = function(e, t, o) {
                                return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
                            }, goog.array.binarySelect = function(e, t, o) {
                                return goog.array.binarySearch_(e, t, !0, void 0, o)
                            }, goog.array.binarySearch_ = function(e, t, o, r, i) {
                                for (var n, s = 0, a = e.length; s < a;) {
                                    var p, l = s + a >> 1;
                                    0 < (p = o ? t.call(i, e[l], l, e) : t(r, e[l])) ? s = 1 + l : (a = l, n = !p)
                                }
                                return n ? s : ~s
                            }, goog.array.sort = function(e, t) {
                                e.sort(t || goog.array.defaultCompare)
                            }, goog.array.stableSort = function(e, t) {
                                for (var o = 0; o < e.length; o++) e[o] = {
                                    index: o,
                                    value: e[o]
                                };
                                var r = t || goog.array.defaultCompare;
                                for (goog.array.sort(e, function(e, t) {
                                        return r(e.value, t.value) || e.index - t.index
                                    }), o = 0; o < e.length; o++) e[o] = e[o].value
                            }, goog.array.sortByKey = function(e, o, t) {
                                var r = t || goog.array.defaultCompare;
                                goog.array.sort(e, function(e, t) {
                                    return r(o(e), o(t))
                                })
                            }, goog.array.sortObjectsByKey = function(e, t, o) {
                                goog.array.sortByKey(e, function(e) {
                                    return e[t]
                                }, o)
                            }, goog.array.isSorted = function(e, t, o) {
                                t = t || goog.array.defaultCompare;
                                for (var r = 1; r < e.length; r++) {
                                    var i = t(e[r - 1], e[r]);
                                    if (0 < i || 0 == i && o) return !1
                                }
                                return !0
                            }, goog.array.equals = function(e, t, o) {
                                if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
                                var r = e.length;
                                o = o || goog.array.defaultCompareEquality;
                                for (var i = 0; i < r; i++)
                                    if (!o(e[i], t[i])) return !1;
                                return !0
                            }, goog.array.compare3 = function(e, t, o) {
                                o = o || goog.array.defaultCompare;
                                for (var r = Math.min(e.length, t.length), i = 0; i < r; i++) {
                                    var n = o(e[i], t[i]);
                                    if (0 != n) return n
                                }
                                return goog.array.defaultCompare(e.length, t.length)
                            }, goog.array.defaultCompare = function(e, t) {
                                return t < e ? 1 : e < t ? -1 : 0
                            }, goog.array.inverseDefaultCompare = function(e, t) {
                                return -goog.array.defaultCompare(e, t)
                            }, goog.array.defaultCompareEquality = function(e, t) {
                                return e === t
                            }, goog.array.binaryInsert = function(e, t, o) {
                                return (o = goog.array.binarySearch(e, t, o)) < 0 && (goog.array.insertAt(e, t, -(o + 1)), !0)
                            }, goog.array.binaryRemove = function(e, t, o) {
                                return 0 <= (t = goog.array.binarySearch(e, t, o)) && goog.array.removeAt(e, t)
                            }, goog.array.bucket = function(e, t, o) {
                                for (var r = {}, i = 0; i < e.length; i++) {
                                    var n = e[i],
                                        s = t.call(o, n, i, e);
                                    goog.isDef(s) && (r[s] || (r[s] = [])).push(n)
                                }
                                return r
                            }, goog.array.toObject = function(o, r, i) {
                                var n = {};
                                return goog.array.forEach(o, function(e, t) {
                                    n[r.call(i, e, t, o)] = e
                                }), n
                            }, goog.array.range = function(e, t, o) {
                                var r = [],
                                    i = 0,
                                    n = e;
                                if (void 0 !== t && (i = e, n = t), (o = o || 1) * (n - i) < 0) return [];
                                if (0 < o)
                                    for (e = i; e < n; e += o) r.push(e);
                                else
                                    for (e = i; n < e; e += o) r.push(e);
                                return r
                            }, goog.array.repeat = function(e, t) {
                                for (var o = [], r = 0; r < t; r++) o[r] = e;
                                return o
                            }, goog.array.flatten = function(e) {
                                for (var t = [], o = 0; o < arguments.length; o++) {
                                    var r = arguments[o];
                                    if (goog.isArray(r))
                                        for (var i = 0; i < r.length; i += 8192)
                                            for (var n = goog.array.slice(r, i, i + 8192), s = (n = goog.array.flatten.apply(null, n), 0); s < n.length; s++) t.push(n[s]);
                                    else t.push(r)
                                }
                                return t
                            }, goog.array.rotate = function(e, t) {
                                return goog.asserts.assert(null != e.length), e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : t < 0 && Array.prototype.push.apply(e, e.splice(0, -t))), e
                            }, goog.array.moveItem = function(e, t, o) {
                                goog.asserts.assert(0 <= t && t < e.length), goog.asserts.assert(0 <= o && o < e.length), t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, o, 0, t[0])
                            }, goog.array.zip = function(e) {
                                if (!arguments.length) return [];
                                for (var t = [], o = e.length, r = 1; r < arguments.length; r++) arguments[r].length < o && (o = arguments[r].length);
                                for (r = 0; r < o; r++) {
                                    for (var i = [], n = 0; n < arguments.length; n++) i.push(arguments[n][r]);
                                    t.push(i)
                                }
                                return t
                            }, goog.array.shuffle = function(e, t) {
                                for (var o = t || Math.random, r = e.length - 1; 0 < r; r--) {
                                    var i = Math.floor(o() * (r + 1)),
                                        n = e[r];
                                    e[r] = e[i], e[i] = n
                                }
                            }, goog.array.copyByIndex = function(t, e) {
                                var o = [];
                                return goog.array.forEach(e, function(e) {
                                    o.push(t[e])
                                }), o
                            }, goog.crypt = {}, goog.crypt.stringToByteArray = function(e) {
                                for (var t = [], o = 0, r = 0; r < e.length; r++) {
                                    for (var i = e.charCodeAt(r); 255 < i;) t[o++] = 255 & i, i >>= 8;
                                    t[o++] = i
                                }
                                return t
                            }, goog.crypt.byteArrayToString = function(e) {
                                if (e.length <= 8192) return String.fromCharCode.apply(null, e);
                                for (var t = "", o = 0; o < e.length; o += 8192) {
                                    var r = goog.array.slice(e, o, o + 8192);
                                    t += String.fromCharCode.apply(null, r)
                                }
                                return t
                            }, goog.crypt.byteArrayToHex = function(e) {
                                return goog.array.map(e, function(e) {
                                    return 1 < (e = e.toString(16)).length ? e : "0" + e
                                }).join("")
                            }, goog.crypt.hexToByteArray = function(e) {
                                goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
                                for (var t = [], o = 0; o < e.length; o += 2) t.push(parseInt(e.substring(o, o + 2), 16));
                                return t
                            }, goog.crypt.stringToUtf8ByteArray = function(e) {
                                for (var t = [], o = 0, r = 0; r < e.length; r++) {
                                    var i = e.charCodeAt(r);
                                    i < 128 ? t[o++] = i : (i < 2048 ? t[o++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[o++] = i >> 18 | 240, t[o++] = i >> 12 & 63 | 128) : t[o++] = i >> 12 | 224, t[o++] = i >> 6 & 63 | 128), t[o++] = 63 & i | 128)
                                }
                                return t
                            }, goog.crypt.utf8ByteArrayToString = function(e) {
                                for (var t, o, r, i = [], n = 0, s = 0; n < e.length;)(r = e[n++]) < 128 ? i[s++] = String.fromCharCode(r) : 191 < r && r < 224 ? (t = e[n++], i[s++] = String.fromCharCode((31 & r) << 6 | 63 & t)) : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & (t = e[n++])) << 12 | (63 & (o = e[n++])) << 6 | 63 & e[n++]) - 65536, i[s++] = String.fromCharCode(55296 + (r >> 10)), i[s++] = String.fromCharCode(56320 + (1023 & r))) : (t = e[n++], o = e[n++], i[s++] = String.fromCharCode((15 & r) << 12 | (63 & t) << 6 | 63 & o));
                                return i.join("")
                            }, goog.crypt.xorByteArray = function(e, t) {
                                goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
                                for (var o = [], r = 0; r < e.length; r++) o.push(e[r] ^ t[r]);
                                return o
                            }, goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
                                var e = goog.labs.userAgent.util.getNavigator_();
                                return (e = e && e.userAgent) ? e : ""
                            }, goog.labs.userAgent.util.getNavigator_ = function() {
                                return goog.global.navigator
                            }, goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(), goog.labs.userAgent.util.setUserAgent = function(e) {
                                goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
                            }, goog.labs.userAgent.util.getUserAgent = function() {
                                return goog.labs.userAgent.util.userAgent_
                            }, goog.labs.userAgent.util.matchUserAgent = function(e) {
                                var t = goog.labs.userAgent.util.getUserAgent();
                                return goog.string.contains(t, e)
                            }, goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
                                var t = goog.labs.userAgent.util.getUserAgent();
                                return goog.string.caseInsensitiveContains(t, e)
                            }, goog.labs.userAgent.util.extractVersionTuples = function(e) {
                                for (var t, o = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), r = []; t = o.exec(e);) r.push([t[1], t[2], t[3] || void 0]);
                                return r
                            }, goog.labs.userAgent.platform = {}, goog.labs.userAgent.platform.isAndroid = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Android")
                            }, goog.labs.userAgent.platform.isIpod = function() {
                                return goog.labs.userAgent.util.matchUserAgent("iPod")
                            }, goog.labs.userAgent.platform.isIphone = function() {
                                return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
                            }, goog.labs.userAgent.platform.isIpad = function() {
                                return goog.labs.userAgent.util.matchUserAgent("iPad")
                            }, goog.labs.userAgent.platform.isIos = function() {
                                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
                            }, goog.labs.userAgent.platform.isMacintosh = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Macintosh")
                            }, goog.labs.userAgent.platform.isLinux = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Linux")
                            }, goog.labs.userAgent.platform.isWindows = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Windows")
                            }, goog.labs.userAgent.platform.isChromeOS = function() {
                                return goog.labs.userAgent.util.matchUserAgent("CrOS")
                            }, goog.labs.userAgent.platform.getVersion = function() {
                                var e = goog.labs.userAgent.util.getUserAgent(),
                                    t = "";
                                return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]), t || ""
                            }, goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
                                return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
                            }, goog.object = {}, goog.object.forEach = function(e, t, o) {
                                for (var r in e) t.call(o, e[r], r, e)
                            }, goog.object.filter = function(e, t, o) {
                                var r, i = {};
                                for (r in e) t.call(o, e[r], r, e) && (i[r] = e[r]);
                                return i
                            }, goog.object.map = function(e, t, o) {
                                var r, i = {};
                                for (r in e) i[r] = t.call(o, e[r], r, e);
                                return i
                            }, goog.object.some = function(e, t, o) {
                                for (var r in e)
                                    if (t.call(o, e[r], r, e)) return !0;
                                return !1
                            }, goog.object.every = function(e, t, o) {
                                for (var r in e)
                                    if (!t.call(o, e[r], r, e)) return !1;
                                return !0
                            }, goog.object.getCount = function(e) {
                                var t, o = 0;
                                for (t in e) o++;
                                return o
                            }, goog.object.getAnyKey = function(e) {
                                for (var t in e) return t
                            }, goog.object.getAnyValue = function(e) {
                                for (var t in e) return e[t]
                            }, goog.object.contains = function(e, t) {
                                return goog.object.containsValue(e, t)
                            }, goog.object.getValues = function(e) {
                                var t, o = [],
                                    r = 0;
                                for (t in e) o[r++] = e[t];
                                return o
                            }, goog.object.getKeys = function(e) {
                                var t, o = [],
                                    r = 0;
                                for (t in e) o[r++] = t;
                                return o
                            }, goog.object.getValueByKeys = function(e, t) {
                                for (var o = (r = goog.isArrayLike(t)) ? t : arguments, r = r ? 0 : 1; r < o.length && (e = e[o[r]], goog.isDef(e)); r++);
                                return e
                            }, goog.object.containsKey = function(e, t) {
                                return null !== e && t in e
                            }, goog.object.containsValue = function(e, t) {
                                for (var o in e)
                                    if (e[o] == t) return !0;
                                return !1
                            }, goog.object.findKey = function(e, t, o) {
                                for (var r in e)
                                    if (t.call(o, e[r], r, e)) return r
                            }, goog.object.findValue = function(e, t, o) {
                                return (t = goog.object.findKey(e, t, o)) && e[t]
                            }, goog.object.isEmpty = function(e) {
                                for (var t in e) return !1;
                                return !0
                            }, goog.object.clear = function(e) {
                                for (var t in e) delete e[t]
                            }, goog.object.remove = function(e, t) {
                                var o;
                                return (o = t in e) && delete e[t], o
                            }, goog.object.add = function(e, t, o) {
                                if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"');
                                goog.object.set(e, t, o)
                            }, goog.object.get = function(e, t, o) {
                                return null !== e && t in e ? e[t] : o
                            }, goog.object.set = function(e, t, o) {
                                e[t] = o
                            }, goog.object.setIfUndefined = function(e, t, o) {
                                return t in e ? e[t] : e[t] = o
                            }, goog.object.setWithReturnValueIfNotSet = function(e, t, o) {
                                return t in e ? e[t] : (o = o(), e[t] = o)
                            }, goog.object.equals = function(e, t) {
                                for (var o in e)
                                    if (!(o in t) || e[o] !== t[o]) return !1;
                                for (o in t)
                                    if (!(o in e)) return !1;
                                return !0
                            }, goog.object.clone = function(e) {
                                var t, o = {};
                                for (t in e) o[t] = e[t];
                                return o
                            }, goog.object.unsafeClone = function(e) {
                                if ("object" != (o = goog.typeOf(e)) && "array" != o) return e;
                                if (goog.isFunction(e.clone)) return e.clone();
                                var t, o = "array" == o ? [] : {};
                                for (t in e) o[t] = goog.object.unsafeClone(e[t]);
                                return o
                            }, goog.object.transpose = function(e) {
                                var t, o = {};
                                for (t in e) o[e[t]] = t;
                                return o
                            }, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(e, t) {
                                for (var o, r, i = 1; i < arguments.length; i++) {
                                    for (o in r = arguments[i]) e[o] = r[o];
                                    for (var n = 0; n < goog.object.PROTOTYPE_FIELDS_.length; n++) o = goog.object.PROTOTYPE_FIELDS_[n], Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                                }
                            }, goog.object.create = function(e) {
                                var t = arguments.length;
                                if (1 == t && goog.isArray(e)) return goog.object.create.apply(null, e);
                                if (t % 2) throw Error("Uneven number of arguments");
                                for (var o = {}, r = 0; r < t; r += 2) o[arguments[r]] = arguments[r + 1];
                                return o
                            }, goog.object.createSet = function(e) {
                                var t = arguments.length;
                                if (1 == t && goog.isArray(e)) return goog.object.createSet.apply(null, e);
                                for (var o = {}, r = 0; r < t; r++) o[arguments[r]] = !0;
                                return o
                            }, goog.object.createImmutableView = function(e) {
                                var t = e;
                                return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
                            }, goog.object.isImmutableView = function(e) {
                                return !!Object.isFrozen && Object.isFrozen(e)
                            }, goog.labs.userAgent.browser = {}, goog.labs.userAgent.browser.matchOpera_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR")
                            }, goog.labs.userAgent.browser.matchIE_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
                            }, goog.labs.userAgent.browser.matchEdge_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Edge")
                            }, goog.labs.userAgent.browser.matchFirefox_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Firefox")
                            }, goog.labs.userAgent.browser.matchSafari_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
                            }, goog.labs.userAgent.browser.matchCoast_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Coast")
                            }, goog.labs.userAgent.browser.matchIosWebview_ = function() {
                                return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
                            }, goog.labs.userAgent.browser.matchChrome_ = function() {
                                return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchOpera_() && !goog.labs.userAgent.browser.matchEdge_()
                            }, goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
                            }, goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_, goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_, goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_, goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_, goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_, goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_, goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_, goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_, goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_, goog.labs.userAgent.browser.isSilk = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Silk")
                            }, goog.labs.userAgent.browser.getVersion = function() {
                                function e(e) {
                                    return e = goog.array.find(e, r), o[e] || ""
                                }
                                var t = goog.labs.userAgent.util.getUserAgent();
                                if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t);
                                t = goog.labs.userAgent.util.extractVersionTuples(t);
                                var o = {};
                                goog.array.forEach(t, function(e) {
                                    o[e[0]] = e[1]
                                });
                                var r = goog.partial(goog.object.containsKey, o);
                                return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS"]) : (t = t[2]) && t[1] || ""
                            }, goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
                                return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
                            }, goog.labs.userAgent.browser.getIEVersion_ = function(e) {
                                if ((t = /rv: *([\d\.]*)/.exec(e)) && t[1]) return t[1];
                                var t = "",
                                    o = /MSIE +([\d\.]+)/.exec(e);
                                if (o && o[1])
                                    if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == o[1])
                                        if (e && e[1]) switch (e[1]) {
                                            case "4.0":
                                                t = "8.0";
                                                break;
                                            case "5.0":
                                                t = "9.0";
                                                break;
                                            case "6.0":
                                                t = "10.0";
                                                break;
                                            case "7.0":
                                                t = "11.0"
                                        } else t = "7.0";
                                        else t = o[1];
                                return t
                            }, goog.labs.userAgent.engine = {}, goog.labs.userAgent.engine.isPresto = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Presto")
                            }, goog.labs.userAgent.engine.isTrident = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
                            }, goog.labs.userAgent.engine.isEdge = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Edge")
                            }, goog.labs.userAgent.engine.isWebKit = function() {
                                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
                            }, goog.labs.userAgent.engine.isGecko = function() {
                                return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
                            }, goog.labs.userAgent.engine.getVersion = function() {
                                if (t = goog.labs.userAgent.util.getUserAgent()) {
                                    var e, t = goog.labs.userAgent.util.extractVersionTuples(t),
                                        o = goog.labs.userAgent.engine.getEngineTuple_(t);
                                    if (o) return "Gecko" == o[0] ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox") : o[1];
                                    if ((t = t[0]) && (e = t[2]) && (e = /Trident\/([^\s;]+)/.exec(e))) return e[1]
                                }
                                return ""
                            }, goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
                                if (!goog.labs.userAgent.engine.isEdge()) return e[1];
                                for (var t = 0; t < e.length; t++) {
                                    var o = e[t];
                                    if ("Edge" == o[0]) return o
                                }
                            }, goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
                                return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
                            }, goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
                                e = goog.array.find(e, function(e) {
                                    return t == e[0]
                                });
                                return e && e[1] || ""
                            }, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_EDGE = !1, goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, goog.userAgent.getUserAgentString = function() {
                                return goog.labs.userAgent.util.getUserAgent()
                            }, goog.userAgent.getNavigator = function() {
                                return goog.global.navigator || null
                            }, goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(), goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(), goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(), goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE, goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(), goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(), goog.userAgent.isMobile_ = function() {
                                return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
                            }, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(), goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
                                var e = goog.userAgent.getNavigator();
                                return e && e.platform || ""
                            }, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD, goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(), goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(), goog.userAgent.isLegacyLinux_ = function() {
                                return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
                            }, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(), goog.userAgent.isX11_ = function() {
                                var e = goog.userAgent.getNavigator();
                                return !!e && goog.string.contains(e.appVersion || "", "X11")
                            }, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(), goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(), goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(), goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.operaVersion_ = function() {
                                var t = goog.global.opera.version;
                                try {
                                    return t()
                                } catch (e) {
                                    return t
                                }
                            }, goog.userAgent.determineVersion_ = function() {
                                if (goog.userAgent.OPERA && goog.global.opera) return goog.userAgent.operaVersion_();
                                var e = "",
                                    t = goog.userAgent.getVersionRegexResult_();
                                return t && (e = t ? t[1] : ""), goog.userAgent.IE && (t = goog.userAgent.getDocumentMode_()) > parseFloat(e) ? String(t) : e
                            }, goog.userAgent.getVersionRegexResult_ = function() {
                                var e = goog.userAgent.getUserAgentString();
                                return goog.userAgent.GECKO ? /rv\:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : void 0
                            }, goog.userAgent.getDocumentMode_ = function() {
                                var e = goog.global.document;
                                return e ? e.documentMode : void 0
                            }, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(e, t) {
                                return goog.string.compareVersions(e, t)
                            }, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(e) {
                                return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[e] || (goog.userAgent.isVersionOrHigherCache_[e] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
                            }, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(e) {
                                return Number(goog.userAgent.DOCUMENT_MODE) >= e
                            }, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = (zA = goog.global.document, AA = goog.userAgent.getDocumentMode_(), zA && goog.userAgent.IE ? AA || ("CSS1Compat" == zA.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0), goog.userAgent.product = {}, goog.userAgent.product.ASSUME_FIREFOX = !1, goog.userAgent.product.ASSUME_IPHONE = !1, goog.userAgent.product.ASSUME_IPAD = !1, goog.userAgent.product.ASSUME_ANDROID = !1, goog.userAgent.product.ASSUME_CHROME = !1, goog.userAgent.product.ASSUME_SAFARI = !1, goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI, goog.userAgent.product.OPERA = goog.userAgent.OPERA, goog.userAgent.product.IE = goog.userAgent.IE, goog.userAgent.product.EDGE = goog.userAgent.EDGE, goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(), goog.userAgent.product.isIphoneOrIpod_ = function() {
                                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
                            }, goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(), goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(), goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(), goog.userAgent.product.isSafariDesktop_ = function() {
                                return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
                            }, goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(), goog.crypt.base64 = {}, goog.crypt.base64.byteToCharMap_ = null, goog.crypt.base64.charToByteMap_ = null, goog.crypt.base64.byteToCharMapWebSafe_ = null, goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=", goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.", goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA, goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa, goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob, goog.crypt.base64.encodeByteArray = function(e, t) {
                                goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"), goog.crypt.base64.init_();
                                for (var o = t ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                                    var n = e[i],
                                        s = i + 1 < e.length,
                                        a = s ? e[i + 1] : 0,
                                        p = i + 2 < e.length,
                                        l = n >> 2,
                                        g = (n = (3 & n) << 4 | a >> 4, a = (15 & a) << 2 | (g = p ? e[i + 2] : 0) >> 6, 63 & g);
                                    p || (g = 64, s || (a = 64)), r.push(o[l], o[n], o[a], o[g])
                                }
                                return r.join("")
                            }, goog.crypt.base64.encodeString = function(e, t) {
                                return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
                            }, goog.crypt.base64.decodeString = function(e, t) {
                                if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t) return goog.global.atob(e);
                                var o = "";
                                return goog.crypt.base64.decodeStringInternal_(e, function(e) {
                                    o += String.fromCharCode(e)
                                }), o
                            }, goog.crypt.base64.decodeStringToByteArray = function(e, t) {
                                var o = [];
                                return goog.crypt.base64.decodeStringInternal_(e, function(e) {
                                    o.push(e)
                                }), o
                            }, goog.crypt.base64.decodeStringToUint8Array = function(e) {
                                goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
                                var t = new Uint8Array(Math.ceil(3 * e.length / 4)),
                                    o = 0;
                                return goog.crypt.base64.decodeStringInternal_(e, function(e) {
                                    t[o++] = e
                                }), t.subarray(0, o)
                            }, goog.crypt.base64.decodeStringInternal_ = function(r, e) {
                                function t(e) {
                                    for (; i < r.length;) {
                                        var t = r.charAt(i++),
                                            o = goog.crypt.base64.charToByteMap_[t];
                                        if (null != o) return o;
                                        if (!goog.string.isEmptyOrWhitespace(t)) throw Error("Unknown base64 encoding at char: " + t)
                                    }
                                    return e
                                }
                                goog.crypt.base64.init_();
                                for (var i = 0;;) {
                                    var o = t(-1),
                                        n = t(0),
                                        s = t(64),
                                        a = t(64);
                                    if (64 === a && -1 === o) break;
                                    e(o << 2 | n >> 4), 64 != s && (e(n << 4 & 240 | s >> 2), 64 != a && e(s << 6 & 192 | a))
                                }
                            }, goog.crypt.base64.init_ = function() {
                                if (!goog.crypt.base64.byteToCharMap_) {
                                    goog.crypt.base64.byteToCharMap_ = {}, goog.crypt.base64.charToByteMap_ = {}, goog.crypt.base64.byteToCharMapWebSafe_ = {};
                                    for (var e = 0; e < goog.crypt.base64.ENCODED_VALS.length; e++) goog.crypt.base64.byteToCharMap_[e] = goog.crypt.base64.ENCODED_VALS.charAt(e), goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[e]] = e, goog.crypt.base64.byteToCharMapWebSafe_[e] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e), e >= goog.crypt.base64.ENCODED_VALS_BASE.length && (goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)] = e)
                                }
                            }, jspb.ExtensionFieldInfo = function(e, t, o, r, i) {
                                this.fieldIndex = e, this.fieldName = t, this.ctor = o, this.toObjectFn = r, this.isRepeated = i
                            }, jspb.ExtensionFieldBinaryInfo = function(e, t, o, r, i, n) {
                                this.fieldInfo = e, this.binaryReaderFn = t, this.binaryWriterFn = o, this.binaryMessageSerializeFn = r, this.binaryMessageDeserializeFn = i, this.isPacked = n
                            }, jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
                                return !!this.ctor
                            }, jspb.Message = function() {}, jspb.Message.GENERATE_TO_OBJECT = !0, jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE, jspb.Message.GENERATE_TO_STRING = !0, jspb.Message.ASSUME_LOCAL_ARRAYS = !1, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0, jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array, jspb.Message.prototype.getJsPbMessageId = function() {
                                return this.messageId_
                            }, jspb.Message.getIndex_ = function(e, t) {
                                return t + e.arrayIndexOffset_
                            }, jspb.Message.getFieldNumber_ = function(e, t) {
                                return t - e.arrayIndexOffset_
                            }, jspb.Message.initialize = function(e, t, o, r, i, n) {
                                if (e.wrappers_ = null, t = t || (o ? [o] : []), e.messageId_ = o ? String(o) : void 0, e.arrayIndexOffset_ = 0 === o ? -1 : 0, e.array = t, jspb.Message.initPivotAndExtensionObject_(e, r), e.convertedFloatingPointFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = i), i)
                                    for (t = 0; t < i.length; t++)(o = i[t]) < e.pivot_ ? (o = jspb.Message.getIndex_(e, o), e.array[o] = e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[o] = e.extensionObject_[o] || jspb.Message.EMPTY_LIST_SENTINEL_);
                                if (n && n.length)
                                    for (t = 0; t < n.length; t++) jspb.Message.computeOneofCase(e, n[t])
                            }, jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [], jspb.Message.isArray_ = function(e) {
                                return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : goog.isArray(e)
                            }, jspb.Message.initPivotAndExtensionObject_ = function(e, t) {
                                if (e.array.length) {
                                    var o = e.array.length - 1,
                                        r = e.array[o];
                                    if (r && "object" == _typeof(r) && !jspb.Message.isArray_(r) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && r instanceof Uint8Array)) return e.pivot_ = jspb.Message.getFieldNumber_(e, o), void(e.extensionObject_ = r)
                                } - 1 < t ? (e.pivot_ = t, e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
                            }, jspb.Message.maybeInitEmptyExtensionObject_ = function(e) {
                                var t = jspb.Message.getIndex_(e, e.pivot_);
                                e.array[t] || (e.extensionObject_ = e.array[t] = {})
                            }, jspb.Message.toObjectList = function(e, t, o) {
                                for (var r = [], i = 0; i < e.length; i++) r[i] = t.call(e[i], o, e[i]);
                                return r
                            }, jspb.Message.toObjectExtension = function(e, t, o, r, i) {
                                for (var n in o) {
                                    var s = o[n],
                                        a = r.call(e, s);
                                    if (null != a) {
                                        for (var p in s.fieldName)
                                            if (s.fieldName.hasOwnProperty(p)) break;
                                        t[p] = s.toObjectFn ? s.isRepeated ? jspb.Message.toObjectList(a, s.toObjectFn, i) : s.toObjectFn(i, a) : a
                                    }
                                }
                            }, jspb.Message.serializeBinaryExtensions = function(e, t, o, r) {
                                for (var i in o) {
                                    var n = o[i],
                                        s = n.fieldInfo;
                                    if (!n.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
                                    var a = r.call(e, s);
                                    if (null != a)
                                        if (s.isMessageType()) {
                                            if (!n.binaryMessageSerializeFn) throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                                            n.binaryWriterFn.call(t, s.fieldIndex, a, n.binaryMessageSerializeFn)
                                        } else n.binaryWriterFn.call(t, s.fieldIndex, a)
                                }
                            }, jspb.Message.readBinaryExtension = function(e, t, o, r, i) {
                                var n, s = o[t.getFieldNumber()];
                                if (s) {
                                    if (o = s.fieldInfo, !s.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
                                    o.isMessageType() ? (n = new o.ctor, s.binaryReaderFn.call(t, n, s.binaryMessageDeserializeFn)) : n = s.binaryReaderFn.call(t), o.isRepeated && !s.isPacked ? (t = r.call(e, o)) ? t.push(n) : i.call(e, o, [n]) : i.call(e, o, n)
                                } else t.skipField()
                            }, jspb.Message.getField = function(e, t) {
                                if (t < e.pivot_) {
                                    var o = jspb.Message.getIndex_(e, t),
                                        r = e.array[o];
                                    return r === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[o] = [] : r
                                }
                                if (e.extensionObject_) return (r = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : r
                            }, jspb.Message.getRepeatedField = function(e, t) {
                                if (t < e.pivot_) {
                                    var o = jspb.Message.getIndex_(e, t),
                                        r = e.array[o];
                                    return r === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[o] = [] : r
                                }
                                return (r = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : r
                            }, jspb.Message.getOptionalFloatingPointField = function(e, t) {
                                t = jspb.Message.getField(e, t);
                                return null == t ? t : +t
                            }, jspb.Message.getRepeatedFloatingPointField = function(e, t) {
                                var o = jspb.Message.getRepeatedField(e, t);
                                if (e.convertedFloatingPointFields_ || (e.convertedFloatingPointFields_ = {}), !e.convertedFloatingPointFields_[t]) {
                                    for (var r = 0; r < o.length; r++) o[r] = +o[r];
                                    e.convertedFloatingPointFields_[t] = !0
                                }
                                return o
                            }, jspb.Message.bytesAsB64 = function(e) {
                                return null == e || goog.isString(e) ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)), null)
                            }, jspb.Message.bytesAsU8 = function(e) {
                                return null == e || e instanceof Uint8Array ? e : goog.isString(e) ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)), null)
                            }, jspb.Message.bytesListAsB64 = function(e) {
                                return jspb.Message.assertConsistentTypes_(e), !e.length || goog.isString(e[0]) ? e : goog.array.map(e, jspb.Message.bytesAsB64)
                            }, jspb.Message.bytesListAsU8 = function(e) {
                                return jspb.Message.assertConsistentTypes_(e), !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
                            }, jspb.Message.assertConsistentTypes_ = function(e) {
                                var t;
                                goog.DEBUG && e && 1 < e.length && (t = goog.typeOf(e[0]), goog.array.forEach(e, function(e) {
                                    goog.typeOf(e) != t && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t)
                                }))
                            }, jspb.Message.getFieldWithDefault = function(e, t, o) {
                                return null == (e = jspb.Message.getField(e, t)) ? o : e
                            }, jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault, jspb.Message.getMapField = function(e, t, o, r) {
                                return e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_ ? e.wrappers_[t] : o ? void 0 : ((o = jspb.Message.getField(e, t)) || (o = [], jspb.Message.setField(e, t, o)), e.wrappers_[t] = new jspb.Map(o, r))
                            }, jspb.Message.setField = function(e, t, o) {
                                t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = o : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[t] = o)
                            }, jspb.Message.setProto3IntField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
                            }, jspb.Message.setProto3StringIntField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, "0")
                            }, jspb.Message.setProto3FloatField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
                            }, jspb.Message.setProto3BooleanField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, !1)
                            }, jspb.Message.setProto3StringField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
                            }, jspb.Message.setProto3BytesField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
                            }, jspb.Message.setProto3EnumField = function(e, t, o) {
                                jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
                            }, jspb.Message.setFieldIgnoringDefault_ = function(e, t, o, r) {
                                o != r ? jspb.Message.setField(e, t, o) : e.array[jspb.Message.getIndex_(e, t)] = null
                            }, jspb.Message.addToRepeatedField = function(e, t, o, r) {
                                e = jspb.Message.getRepeatedField(e, t), null != r ? e.splice(r, 0, o) : e.push(o)
                            }, jspb.Message.setOneofField = function(e, t, o, r) {
                                (o = jspb.Message.computeOneofCase(e, o)) && o !== t && void 0 !== r && (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0), jspb.Message.setField(e, o, void 0)), jspb.Message.setField(e, t, r)
                            }, jspb.Message.computeOneofCase = function(e, t) {
                                for (var o, r, i = 0; i < t.length; i++) {
                                    var n = t[i],
                                        s = jspb.Message.getField(e, n);
                                    null != s && (o = n, r = s, jspb.Message.setField(e, n, void 0))
                                }
                                return o ? (jspb.Message.setField(e, o, r), o) : 0
                            }, jspb.Message.getWrapperField = function(e, t, o, r) {
                                var i;
                                return e.wrappers_ || (e.wrappers_ = {}), e.wrappers_[o] || (i = jspb.Message.getField(e, o), (r || i) && (e.wrappers_[o] = new t(i))), e.wrappers_[o]
                            }, jspb.Message.getRepeatedWrapperField = function(e, t, o) {
                                return jspb.Message.wrapRepeatedField_(e, t, o), (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[o] = []), t
                            }, jspb.Message.wrapRepeatedField_ = function(e, t, o) {
                                if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o]) {
                                    for (var r = jspb.Message.getRepeatedField(e, o), i = [], n = 0; n < r.length; n++) i[n] = new t(r[n]);
                                    e.wrappers_[o] = i
                                }
                            }, jspb.Message.setWrapperField = function(e, t, o) {
                                e.wrappers_ || (e.wrappers_ = {});
                                var r = o && o.toArray();
                                e.wrappers_[t] = o, jspb.Message.setField(e, t, r)
                            }, jspb.Message.setOneofWrapperField = function(e, t, o, r) {
                                e.wrappers_ || (e.wrappers_ = {});
                                var i = r && r.toArray();
                                e.wrappers_[t] = r, jspb.Message.setOneofField(e, t, o, i)
                            }, jspb.Message.setRepeatedWrapperField = function(e, t, o) {
                                e.wrappers_ || (e.wrappers_ = {}), o = o || [];
                                for (var r = [], i = 0; i < o.length; i++) r[i] = o[i].toArray();
                                e.wrappers_[t] = o, jspb.Message.setField(e, t, r)
                            }, jspb.Message.addToRepeatedWrapperField = function(e, t, o, r, i) {
                                jspb.Message.wrapRepeatedField_(e, r, t);
                                var n = (n = e.wrappers_[t]) || (e.wrappers_[t] = []);
                                return o = o || new r, e = jspb.Message.getRepeatedField(e, t), null != i ? (n.splice(i, 0, o), e.splice(i, 0, o.toArray())) : (n.push(o), e.push(o.toArray())), o
                            }, jspb.Message.toMap = function(e, t, o, r) {
                                for (var i = {}, n = 0; n < e.length; n++) i[t.call(e[n])] = o ? o.call(e[n], r, e[n]) : e[n];
                                return i
                            }, jspb.Message.prototype.syncMapFields_ = function() {
                                if (this.wrappers_)
                                    for (var e in this.wrappers_) {
                                        var t = this.wrappers_[e];
                                        if (goog.isArray(t))
                                            for (var o = 0; o < t.length; o++) t[o] && t[o].toArray();
                                        else t && t.toArray()
                                    }
                            }, jspb.Message.prototype.toArray = function() {
                                return this.syncMapFields_(), this.array
                            }, jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
                                return this.syncMapFields_(), this.array.toString()
                            }), jspb.Message.prototype.getExtension = function(t) {
                                if (this.extensionObject_) {
                                    this.wrappers_ || (this.wrappers_ = {});
                                    var e = t.fieldIndex;
                                    if (t.isRepeated) {
                                        if (t.isMessageType()) return this.wrappers_[e] || (this.wrappers_[e] = goog.array.map(this.extensionObject_[e] || [], function(e) {
                                            return new t.ctor(e)
                                        })), this.wrappers_[e]
                                    } else if (t.isMessageType()) return !this.wrappers_[e] && this.extensionObject_[e] && (this.wrappers_[e] = new t.ctor(this.extensionObject_[e])), this.wrappers_[e];
                                    return this.extensionObject_[e]
                                }
                            }, jspb.Message.prototype.setExtension = function(e, t) {
                                this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
                                var o = e.fieldIndex;
                                return e.isRepeated ? (t = t || [], e.isMessageType() ? (this.wrappers_[o] = t, this.extensionObject_[o] = goog.array.map(t, function(e) {
                                    return e.toArray()
                                })) : this.extensionObject_[o] = t) : e.isMessageType() ? (this.wrappers_[o] = t, this.extensionObject_[o] = t && t.toArray()) : this.extensionObject_[o] = t, this
                            }, jspb.Message.difference = function(e, t) {
                                if (!(e instanceof t.constructor)) throw Error("Messages have different types.");
                                var o = e.toArray(),
                                    r = t.toArray(),
                                    i = [],
                                    n = 0,
                                    s = (o.length > r.length ? o : r).length;
                                for (e.getJsPbMessageId() && (i[0] = e.getJsPbMessageId(), n = 1); n < s; n++) jspb.Message.compareFields(o[n], r[n]) || (i[n] = r[n]);
                                return new e.constructor(i)
                            }, jspb.Message.equals = function(e, t) {
                                return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray())
                            }, jspb.Message.compareExtensions = function(e, t) {
                                t = t || {};
                                var o, r = {};
                                for (o in e = e || {}) r[o] = 0;
                                for (o in t) r[o] = 0;
                                for (o in r)
                                    if (!jspb.Message.compareFields(e[o], t[o])) return !1;
                                return !0
                            }, jspb.Message.compareFields = function(e, t) {
                                if (e == t) return !0;
                                if (!goog.isObject(e) || !goog.isObject(t)) return !!(goog.isNumber(e) && isNaN(e) || goog.isNumber(t) && isNaN(t)) && String(e) == String(t);
                                if (e.constructor != t.constructor) return !1;
                                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
                                    if (e.length != t.length) return !1;
                                    for (var o = 0; o < e.length; o++)
                                        if (e[o] != t[o]) return !1;
                                    return !0
                                }
                                if (e.constructor === Array) {
                                    for (var r = void 0, i = void 0, n = Math.max(e.length, t.length), o = 0; o < n; o++) {
                                        var s = e[o],
                                            a = t[o];
                                        if (s && s.constructor == Object && (goog.asserts.assert(void 0 === r), goog.asserts.assert(o === e.length - 1), r = s, s = void 0), a && a.constructor == Object && (goog.asserts.assert(void 0 === i), goog.asserts.assert(o === t.length - 1), i = a, a = void 0), !jspb.Message.compareFields(s, a)) return !1
                                    }
                                    return !r && !i || (r = r || {}, i = i || {}, jspb.Message.compareExtensions(r, i))
                                }
                                if (e.constructor === Object) return jspb.Message.compareExtensions(e, t);
                                throw Error("Invalid type in JSPB array")
                            }, jspb.Message.prototype.cloneMessage = function() {
                                return jspb.Message.cloneMessage(this)
                            }, jspb.Message.prototype.clone = function() {
                                return jspb.Message.cloneMessage(this)
                            }, jspb.Message.clone = function(e) {
                                return jspb.Message.cloneMessage(e)
                            }, jspb.Message.cloneMessage = function(e) {
                                return new e.constructor(jspb.Message.clone_(e.toArray()))
                            }, jspb.Message.copyInto = function(e, t) {
                                goog.asserts.assertInstanceof(e, jspb.Message), goog.asserts.assertInstanceof(t, jspb.Message), goog.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type.");
                                for (var e = jspb.Message.clone(e), o = t.toArray(), r = e.toArray(), i = o.length = 0; i < r.length; i++) o[i] = r[i];
                                t.wrappers_ = e.wrappers_, t.extensionObject_ = e.extensionObject_
                            }, jspb.Message.clone_ = function(e) {
                                var t;
                                if (goog.isArray(e)) {
                                    for (var o = Array(e.length), r = 0; r < e.length; r++) null != (t = e[r]) && (o[r] = "object" == _typeof(t) ? jspb.Message.clone_(goog.asserts.assert(t)) : t);
                                    return o
                                }
                                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e);
                                for (r in o = {}, e) null != (t = e[r]) && (o[r] = "object" == _typeof(t) ? jspb.Message.clone_(goog.asserts.assert(t)) : t);
                                return o
                            }, jspb.Message.registerMessageType = function(e, t) {
                                (jspb.Message.registry_[e] = t).messageId = e
                            }, jspb.Message.registry_ = {}, jspb.Message.messageSetExtensions = {}, jspb.Message.messageSetExtensionsBinary = {}, jspb.arith = {}, jspb.arith.UInt64 = function(e, t) {
                                this.lo = e, this.hi = t
                            }, jspb.arith.UInt64.prototype.cmp = function(e) {
                                return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
                            }, jspb.arith.UInt64.prototype.rightShift = function() {
                                return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
                            }, jspb.arith.UInt64.prototype.leftShift = function() {
                                return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
                            }, jspb.arith.UInt64.prototype.msb = function() {
                                return !!(2147483648 & this.hi)
                            }, jspb.arith.UInt64.prototype.lsb = function() {
                                return !!(1 & this.lo)
                            }, jspb.arith.UInt64.prototype.zero = function() {
                                return 0 == this.lo && 0 == this.hi
                            }, jspb.arith.UInt64.prototype.add = function(e) {
                                return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
                            }, jspb.arith.UInt64.prototype.sub = function(e) {
                                return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (this.lo - e.lo < 0 ? 1 : 0) >>> 0)
                            }, jspb.arith.UInt64.mul32x32 = function(e, t) {
                                for (var o = e >>> 16, r = 65535 & t, t = t >>> 16, i = (n = 65535 & e) * r + 65536 * (n * t & 65535) + 65536 * (o * r & 65535), n = o * t + (n * t >>> 16) + (o * r >>> 16); 4294967296 <= i;) i -= 4294967296, n += 1;
                                return new jspb.arith.UInt64(i >>> 0, n >>> 0)
                            }, jspb.arith.UInt64.prototype.mul = function(e) {
                                var t = jspb.arith.UInt64.mul32x32(this.lo, e);
                                return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo, e.lo = 0, t.add(e)
                            }, jspb.arith.UInt64.prototype.div = function(e) {
                                if (0 == e) return [];
                                var t = new jspb.arith.UInt64(0, 0),
                                    o = new jspb.arith.UInt64(this.lo, this.hi);
                                e = new jspb.arith.UInt64(e, 0);
                                for (var r = new jspb.arith.UInt64(1, 0); !e.msb();) e = e.leftShift(), r = r.leftShift();
                                for (; !r.zero();) e.cmp(o) <= 0 && (t = t.add(r), o = o.sub(e)), e = e.rightShift(), r = r.rightShift();
                                return [t, o]
                            }, jspb.arith.UInt64.prototype.toString = function() {
                                for (var e = "", t = this; !t.zero();) var o = (t = t.div(10))[0],
                                    e = t[1].lo + e,
                                    t = o;
                                return "" == e && (e = "0"), e
                            }, jspb.arith.UInt64.fromString = function(e) {
                                for (var t = new jspb.arith.UInt64(0, 0), o = new jspb.arith.UInt64(0, 0), r = 0; r < e.length; r++) {
                                    if (e[r] < "0" || "9" < e[r]) return null;
                                    var i = parseInt(e[r], 10);
                                    o.lo = i, t = t.mul(10).add(o)
                                }
                                return t
                            }, jspb.arith.UInt64.prototype.clone = function() {
                                return new jspb.arith.UInt64(this.lo, this.hi)
                            }, jspb.arith.Int64 = function(e, t) {
                                this.lo = e, this.hi = t
                            }, jspb.arith.Int64.prototype.add = function(e) {
                                return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
                            }, jspb.arith.Int64.prototype.sub = function(e) {
                                return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (this.lo - e.lo < 0 ? 1 : 0) >>> 0)
                            }, jspb.arith.Int64.prototype.clone = function() {
                                return new jspb.arith.Int64(this.lo, this.hi)
                            }, jspb.arith.Int64.prototype.toString = function() {
                                var e = 0 != (2147483648 & this.hi),
                                    t = new jspb.arith.UInt64(this.lo, this.hi);
                                return e && (t = new jspb.arith.UInt64(0, 0).sub(t)), (e ? "-" : "") + t.toString()
                            }, jspb.arith.Int64.fromString = function(e) {
                                var t = 0 < e.length && "-" == e[0];
                                return t && (e = e.substring(1)), null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)), new jspb.arith.Int64(e.lo, e.hi))
                            }, jspb.BinaryConstants = {}, jspb.ConstBinaryMessage = function() {}, jspb.BinaryMessage = function() {}, jspb.BinaryConstants.FieldType = {
                                INVALID: -1,
                                DOUBLE: 1,
                                FLOAT: 2,
                                INT64: 3,
                                UINT64: 4,
                                INT32: 5,
                                FIXED64: 6,
                                FIXED32: 7,
                                BOOL: 8,
                                STRING: 9,
                                GROUP: 10,
                                MESSAGE: 11,
                                BYTES: 12,
                                UINT32: 13,
                                ENUM: 14,
                                SFIXED32: 15,
                                SFIXED64: 16,
                                SINT32: 17,
                                SINT64: 18,
                                FHASH64: 30,
                                VHASH64: 31
                            }, jspb.BinaryConstants.WireType = {
                                INVALID: -1,
                                VARINT: 0,
                                FIXED64: 1,
                                DELIMITED: 2,
                                START_GROUP: 3,
                                END_GROUP: 4,
                                FIXED32: 5
                            }, jspb.BinaryConstants.FieldTypeToWireType = function(e) {
                                var t = jspb.BinaryConstants.FieldType,
                                    o = jspb.BinaryConstants.WireType;
                                switch (e) {
                                    case t.INT32:
                                    case t.INT64:
                                    case t.UINT32:
                                    case t.UINT64:
                                    case t.SINT32:
                                    case t.SINT64:
                                    case t.BOOL:
                                    case t.ENUM:
                                    case t.VHASH64:
                                        return o.VARINT;
                                    case t.DOUBLE:
                                    case t.FIXED64:
                                    case t.SFIXED64:
                                    case t.FHASH64:
                                        return o.FIXED64;
                                    case t.STRING:
                                    case t.MESSAGE:
                                    case t.BYTES:
                                        return o.DELIMITED;
                                    case t.FLOAT:
                                    case t.FIXED32:
                                    case t.SFIXED32:
                                        return o.FIXED32;
                                    default:
                                        return o.INVALID
                                }
                            }, jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1, jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60, jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54, jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22, jspb.BinaryConstants.FLOAT64_EPS = 5e-324, jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324, jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292, jspb.BinaryConstants.TWO_TO_20 = 1048576, jspb.BinaryConstants.TWO_TO_23 = 8388608, jspb.BinaryConstants.TWO_TO_31 = 2147483648, jspb.BinaryConstants.TWO_TO_32 = 4294967296, jspb.BinaryConstants.TWO_TO_52 = 4503599627370496, jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000, jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000, jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0", jspb.utils = {}, jspb.utils.split64Low = 0, jspb.utils.split64High = 0, jspb.utils.splitUint64 = function(e) {
                                var t = e >>> 0;
                                e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = t, jspb.utils.split64High = e
                            }, jspb.utils.splitInt64 = function(e) {
                                var t = e < 0,
                                    o = (e = Math.abs(e)) >>> 0;
                                e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32), e >>>= 0, t && (e = ~e >>> 0, 4294967295 < (o = 1 + (~o >>> 0)) && (o = 0, 4294967295 < ++e && (e = 0))), jspb.utils.split64Low = o, jspb.utils.split64High = e
                            }, jspb.utils.splitZigzag64 = function(e) {
                                var t = e < 0;
                                e = 2 * Math.abs(e), jspb.utils.splitUint64(e), e = jspb.utils.split64Low;
                                var o = jspb.utils.split64High;
                                t && (0 == e ? 0 == o ? o = e = 4294967295 : (o--, e = 4294967295) : e--), jspb.utils.split64Low = e, jspb.utils.split64High = o
                            }, jspb.utils.splitFloat32 = function(e) {
                                var t, o = e < 0 ? 1 : 0;
                                0 === (e = o ? -e : e) ? 0 < 1 / e ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648) : isNaN(e) ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647) : e > jspb.BinaryConstants.FLOAT32_MAX ? (jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | 2139095040) >>> 0) : e < jspb.BinaryConstants.FLOAT32_MIN ? (e = Math.round(e / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | e) >>> 0) : (t = Math.floor(Math.log(e) / Math.LN2), e *= Math.pow(2, -t), e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23), jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | t + 127 << 23 | e) >>> 0)
                            }, jspb.utils.splitFloat64 = function(e) {
                                var t, o, r = e < 0 ? 1 : 0;
                                0 === (e = r ? -e : e) ? (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648, jspb.utils.split64Low = 0) : isNaN(e) ? (jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295) : e > jspb.BinaryConstants.FLOAT64_MAX ? (jspb.utils.split64High = (r << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0) : e < jspb.BinaryConstants.FLOAT64_MIN ? (e = (t = e / Math.pow(2, -1074)) / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (r << 31 | e) >>> 0, jspb.utils.split64Low = t >>> 0) : (1024 == (o = Math.floor(Math.log(e) / Math.LN2)) && (o = 1023), e = (t = e * Math.pow(2, -o)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, t = t * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (r << 31 | o + 1023 << 20 | e) >>> 0, jspb.utils.split64Low = t)
                            }, jspb.utils.splitHash64 = function(e) {
                                var t = e.charCodeAt(0),
                                    o = e.charCodeAt(1),
                                    r = e.charCodeAt(2),
                                    i = e.charCodeAt(3),
                                    n = e.charCodeAt(4),
                                    s = e.charCodeAt(5),
                                    a = e.charCodeAt(6);
                                e = e.charCodeAt(7), jspb.utils.split64Low = t + (o << 8) + (r << 16) + (i << 24) >>> 0, jspb.utils.split64High = n + (s << 8) + (a << 16) + (e << 24) >>> 0
                            }, jspb.utils.joinUint64 = function(e, t) {
                                return t * jspb.BinaryConstants.TWO_TO_32 + e
                            }, jspb.utils.joinInt64 = function(e, t) {
                                var o = 2147483648 & t;
                                o && (t = ~t >>> 0, 0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0));
                                t = jspb.utils.joinUint64(e, t);
                                return o ? -t : t
                            }, jspb.utils.joinZigzag64 = function(e, t) {
                                var o = 1 & e;
                                e = (e >>> 1 | t << 31) >>> 0, t >>>= 1, o && 0 == (e = e + 1 >>> 0) && (t = t + 1 >>> 0);
                                t = jspb.utils.joinUint64(e, t);
                                return o ? -t : t
                            }, jspb.utils.joinFloat32 = function(e, t) {
                                var o = 2 * (e >> 31) + 1,
                                    r = e >>> 23 & 255,
                                    e = 8388607 & e;
                                return 255 == r ? e ? NaN : 1 / 0 * o : 0 == r ? o * Math.pow(2, -149) * e : o * Math.pow(2, r - 150) * (e + Math.pow(2, 23))
                            }, jspb.utils.joinFloat64 = function(e, t) {
                                var o = 2 * (t >> 31) + 1,
                                    r = t >>> 20 & 2047,
                                    e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e;
                                return 2047 == r ? e ? NaN : 1 / 0 * o : 0 == r ? o * Math.pow(2, -1074) * e : o * Math.pow(2, r - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
                            }, jspb.utils.joinHash64 = function(e, t) {
                                return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255)
                            }, jspb.utils.DIGITS = "0123456789abcdef".split(""), jspb.utils.joinUnsignedDecimalString = function(e, t) {
                                function o(e) {
                                    for (var t = 1e7, o = 0; o < 7; o++) {
                                        var r = e / (t /= 10) % 10 >>> 0;
                                        0 == r && !n || (n = !0, s += i[r])
                                    }
                                }
                                if (t <= 2097151) return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
                                var t = (16777215 & e) + 6777216 * (r = (e >>> 24 | t << 8) >>> 0 & 16777215) + 6710656 * (e = t >> 16 & 65535),
                                    r = r + 8147497 * e,
                                    e = 2 * e;
                                1e7 <= t && (r += Math.floor(t / 1e7), t %= 1e7), 1e7 <= r && (e += Math.floor(r / 1e7), r %= 1e7);
                                var i = jspb.utils.DIGITS,
                                    n = !1,
                                    s = "";
                                return (e || n) && o(e), (r || n) && o(r), (t || n) && o(t), s
                            }, jspb.utils.joinSignedDecimalString = function(e, t) {
                                var o = 2147483648 & t;
                                o && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0);
                                t = jspb.utils.joinUnsignedDecimalString(e, t);
                                return o ? "-" + t : t
                            }, jspb.utils.hash64ToDecimalString = function(e, t) {
                                jspb.utils.splitHash64(e);
                                var o = jspb.utils.split64Low,
                                    e = jspb.utils.split64High;
                                return t ? jspb.utils.joinSignedDecimalString(o, e) : jspb.utils.joinUnsignedDecimalString(o, e)
                            }, jspb.utils.hash64ArrayToDecimalStrings = function(e, t) {
                                for (var o = Array(e.length), r = 0; r < e.length; r++) o[r] = jspb.utils.hash64ToDecimalString(e[r], t);
                                return o
                            }, jspb.utils.decimalStringToHash64 = function(e) {
                                function t(e, t) {
                                    for (var o = 0; o < 8 && (1 !== e || 0 < t); o++) {
                                        var r = e * i[o] + t;
                                        i[o] = 255 & r, t = r >>> 8
                                    }
                                }
                                goog.asserts.assert(0 < e.length);
                                var o = !1;
                                "-" === e[0] && (o = !0, e = e.slice(1));
                                for (var i = [0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < e.length; r++) t(10, jspb.utils.DIGITS.indexOf(e[r]));
                                return o && (function() {
                                    for (var e = 0; e < 8; e++) i[e] = 255 & ~i[e]
                                }(), t(1, 1)), goog.crypt.byteArrayToString(i)
                            }, jspb.utils.splitDecimalString = function(e) {
                                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
                            }, jspb.utils.hash64ToHexString = function(e) {
                                var t = Array(18);
                                t[0] = "0", t[1] = "x";
                                for (var o = 0; o < 8; o++) {
                                    var r = e.charCodeAt(7 - o);
                                    t[2 * o + 2] = jspb.utils.DIGITS[r >> 4], t[2 * o + 3] = jspb.utils.DIGITS[15 & r]
                                }
                                return t.join("")
                            }, jspb.utils.hexStringToHash64 = function(e) {
                                e = e.toLowerCase(), goog.asserts.assert(18 == e.length), goog.asserts.assert("0" == e[0]), goog.asserts.assert("x" == e[1]);
                                for (var t = "", o = 0; o < 8; o++) var r = jspb.utils.DIGITS.indexOf(e[2 * o + 2]),
                                    i = jspb.utils.DIGITS.indexOf(e[2 * o + 3]),
                                    t = String.fromCharCode(16 * r + i) + t;
                                return t
                            }, jspb.utils.hash64ToNumber = function(e, t) {
                                jspb.utils.splitHash64(e);
                                var o = jspb.utils.split64Low,
                                    e = jspb.utils.split64High;
                                return t ? jspb.utils.joinInt64(o, e) : jspb.utils.joinUint64(o, e)
                            }, jspb.utils.numberToHash64 = function(e) {
                                return jspb.utils.splitInt64(e), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.utils.countVarints = function(e, t, o) {
                                for (var r = 0, i = t; i < o; i++) r += e[i] >> 7;
                                return o - t - r
                            }, jspb.utils.countVarintFields = function(e, t, o, r) {
                                var i = 0;
                                if ((r = 8 * r + jspb.BinaryConstants.WireType.VARINT) < 128)
                                    for (; t < o && e[t++] == r;)
                                        for (i++;;) {
                                            var n = e[t++];
                                            if (0 == (128 & n)) break
                                        } else
                                            for (; t < o;) {
                                                for (n = r; 128 < n;) {
                                                    if (e[t] != (127 & n | 128)) return i;
                                                    t++, n >>= 7
                                                }
                                                if (e[t++] != n) break;
                                                for (i++; 0 != (128 & (n = e[t++])););
                                            }
                                return i
                            }, jspb.utils.countFixedFields_ = function(e, t, o, r, i) {
                                var n = 0;
                                if (r < 128)
                                    for (; t < o && e[t++] == r;) n++, t += i;
                                else
                                    for (; t < o;) {
                                        for (var s = r; 128 < s;) {
                                            if (e[t++] != (127 & s | 128)) return n;
                                            s >>= 7
                                        }
                                        if (e[t++] != s) break;
                                        n++, t += i
                                    }
                                return n
                            }, jspb.utils.countFixed32Fields = function(e, t, o, r) {
                                return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED32, 4)
                            }, jspb.utils.countFixed64Fields = function(e, t, o, r) {
                                return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED64, 8)
                            }, jspb.utils.countDelimitedFields = function(e, t, o, r) {
                                var i = 0;
                                for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; t < o;) {
                                    for (var n = r; 128 < n;) {
                                        if (e[t++] != (127 & n | 128)) return i;
                                        n >>= 7
                                    }
                                    if (e[t++] != n) break;
                                    i++;
                                    for (var s = 0, a = 1; s += (127 & (n = e[t++])) * a, a *= 128, 0 != (128 & n););
                                    t += s
                                }
                                return i
                            }, jspb.utils.debugBytesToTextFormat = function(e) {
                                var t = '"';
                                if (e) {
                                    e = jspb.utils.byteSourceToUint8Array(e);
                                    for (var o = 0; o < e.length; o++) t += "\\x", e[o] < 16 && (t += "0"), t += e[o].toString(16)
                                }
                                return t + '"'
                            }, jspb.utils.debugScalarToTextFormat = function(e) {
                                return goog.isString(e) ? goog.string.quote(e) : e.toString()
                            }, jspb.utils.stringToByteArray = function(e) {
                                for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
                                    var r = e.charCodeAt(o);
                                    if (255 < r) throw Error("Conversion error: string contains codepoint outside of byte range");
                                    t[o] = r
                                }
                                return t
                            }, jspb.utils.byteSourceToUint8Array = function(e) {
                                return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || e.constructor === Buffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Type not convertible to Uint8Array."), new Uint8Array(0))
                            }, jspb.BinaryEncoder = function() {
                                this.buffer_ = []
                            }, jspb.BinaryEncoder.prototype.length = function() {
                                return this.buffer_.length
                            }, jspb.BinaryEncoder.prototype.end = function() {
                                var e = this.buffer_;
                                return this.buffer_ = [], e
                            }, jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(e, t) {
                                for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e;) this.buffer_.push(127 & e | 128), e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
                                this.buffer_.push(e)
                            }, jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(e, t) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUint32(e), this.writeUint32(t)
                            }, jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(e) {
                                for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e;) this.buffer_.push(127 & e | 128), e >>>= 7;
                                this.buffer_.push(e)
                            }, jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(e) {
                                if (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 0 <= e) this.writeUnsignedVarint32(e);
                                else {
                                    for (var t = 0; t < 9; t++) this.buffer_.push(127 & e | 128), e >>= 7;
                                    this.buffer_.push(1)
                                }
                            }, jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
                            }, jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitZigzag64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(e) {
                                this.writeZigzagVarint64(parseInt(e, 10))
                            }, jspb.BinaryEncoder.prototype.writeUint8 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < 256), this.buffer_.push(e >>> 0 & 255)
                            }, jspb.BinaryEncoder.prototype.writeUint16 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < 65536), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
                            }, jspb.BinaryEncoder.prototype.writeUint32 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
                            }, jspb.BinaryEncoder.prototype.writeUint64 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitUint64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeInt8 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-128 <= e && e < 128), this.buffer_.push(e >>> 0 & 255)
                            }, jspb.BinaryEncoder.prototype.writeInt16 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-32768 <= e && e < 32768), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
                            }, jspb.BinaryEncoder.prototype.writeInt32 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
                            }, jspb.BinaryEncoder.prototype.writeInt64 = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeInt64String = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeFloat = function(e) {
                                goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX), jspb.utils.splitFloat32(e), this.writeUint32(jspb.utils.split64Low)
                            }, jspb.BinaryEncoder.prototype.writeDouble = function(e) {
                                goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX), jspb.utils.splitFloat64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeBool = function(e) {
                                goog.asserts.assert(goog.isBoolean(e) || goog.isNumber(e)), this.buffer_.push(e ? 1 : 0)
                            }, jspb.BinaryEncoder.prototype.writeEnum = function(e) {
                                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32(e)
                            }, jspb.BinaryEncoder.prototype.writeBytes = function(e) {
                                this.buffer_.push.apply(this.buffer_, e)
                            }, jspb.BinaryEncoder.prototype.writeVarintHash64 = function(e) {
                                jspb.utils.splitHash64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeFixedHash64 = function(e) {
                                jspb.utils.splitHash64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
                            }, jspb.BinaryEncoder.prototype.writeString = function(e) {
                                for (var t = this.buffer_.length, o = 0; o < e.length; o++) {
                                    var r, i = e.charCodeAt(o);
                                    i < 128 ? this.buffer_.push(i) : i < 2048 ? (this.buffer_.push(i >> 6 | 192), this.buffer_.push(63 & i | 128)) : i < 65536 && (55296 <= i && i <= 56319 && o + 1 < e.length ? 56320 <= (r = e.charCodeAt(o + 1)) && r <= 57343 && (i = 1024 * (i - 55296) + r - 56320 + 65536, this.buffer_.push(i >> 18 | 240), this.buffer_.push(i >> 12 & 63 | 128), this.buffer_.push(i >> 6 & 63 | 128), this.buffer_.push(63 & i | 128), o++) : (this.buffer_.push(i >> 12 | 224), this.buffer_.push(i >> 6 & 63 | 128), this.buffer_.push(63 & i | 128)))
                                }
                                return this.buffer_.length - t
                            }, jspb.BinaryWriter = function() {
                                this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder, this.bookmarks_ = []
                            }, jspb.BinaryWriter.prototype.appendUint8Array_ = function(e) {
                                var t = this.encoder_.end();
                                this.blocks_.push(t), this.blocks_.push(e), this.totalLength_ += t.length + e.length
                            }, jspb.BinaryWriter.prototype.beginDelimited_ = function(e) {
                                return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), e = this.encoder_.end(), this.blocks_.push(e), this.totalLength_ += e.length, e.push(this.totalLength_), e
                            }, jspb.BinaryWriter.prototype.endDelimited_ = function(e) {
                                var t = e.pop(),
                                    t = this.totalLength_ + this.encoder_.length() - t;
                                for (goog.asserts.assert(0 <= t); 127 < t;) e.push(127 & t | 128), t >>>= 7, this.totalLength_++;
                                e.push(t), this.totalLength_++
                            }, jspb.BinaryWriter.prototype.writeSerializedMessage = function(e, t, o) {
                                this.appendUint8Array_(e.subarray(t, o))
                            }, jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(e, t, o) {
                                null != e && null != t && null != o && this.writeSerializedMessage(e, t, o)
                            }, jspb.BinaryWriter.prototype.reset = function() {
                                this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = []
                            }, jspb.BinaryWriter.prototype.getResultBuffer = function() {
                                goog.asserts.assert(0 == this.bookmarks_.length);
                                for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, o = t.length, r = 0, i = 0; i < o; i++) {
                                    var n = t[i];
                                    e.set(n, r), r += n.length
                                }
                                return t = this.encoder_.end(), e.set(t, r), r += t.length, goog.asserts.assert(r == e.length), this.blocks_ = [e], e
                            }, jspb.BinaryWriter.prototype.getResultBase64String = function(e) {
                                return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
                            }, jspb.BinaryWriter.prototype.beginSubMessage = function(e) {
                                this.bookmarks_.push(this.beginDelimited_(e))
                            }, jspb.BinaryWriter.prototype.endSubMessage = function() {
                                goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
                            }, jspb.BinaryWriter.prototype.writeFieldHeader_ = function(e, t) {
                                goog.asserts.assert(1 <= e && e == Math.floor(e)), this.encoder_.writeUnsignedVarint32(8 * e + t)
                            }, jspb.BinaryWriter.prototype.writeAny = function(e, t, o) {
                                var r = jspb.BinaryConstants.FieldType;
                                switch (e) {
                                    case r.DOUBLE:
                                        this.writeDouble(t, o);
                                        break;
                                    case r.FLOAT:
                                        this.writeFloat(t, o);
                                        break;
                                    case r.INT64:
                                        this.writeInt64(t, o);
                                        break;
                                    case r.UINT64:
                                        this.writeUint64(t, o);
                                        break;
                                    case r.INT32:
                                        this.writeInt32(t, o);
                                        break;
                                    case r.FIXED64:
                                        this.writeFixed64(t, o);
                                        break;
                                    case r.FIXED32:
                                        this.writeFixed32(t, o);
                                        break;
                                    case r.BOOL:
                                        this.writeBool(t, o);
                                        break;
                                    case r.STRING:
                                        this.writeString(t, o);
                                        break;
                                    case r.GROUP:
                                        goog.asserts.fail("Group field type not supported in writeAny()");
                                        break;
                                    case r.MESSAGE:
                                        goog.asserts.fail("Message field type not supported in writeAny()");
                                        break;
                                    case r.BYTES:
                                        this.writeBytes(t, o);
                                        break;
                                    case r.UINT32:
                                        this.writeUint32(t, o);
                                        break;
                                    case r.ENUM:
                                        this.writeEnum(t, o);
                                        break;
                                    case r.SFIXED32:
                                        this.writeSfixed32(t, o);
                                        break;
                                    case r.SFIXED64:
                                        this.writeSfixed64(t, o);
                                        break;
                                    case r.SINT32:
                                        this.writeSint32(t, o);
                                        break;
                                    case r.SINT64:
                                        this.writeSint64(t, o);
                                        break;
                                    case r.FHASH64:
                                        this.writeFixedHash64(t, o);
                                        break;
                                    case r.VHASH64:
                                        this.writeVarintHash64(t, o);
                                        break;
                                    default:
                                        goog.asserts.fail("Invalid field type in writeAny()")
                                }
                            }, jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(t))
                            }, jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
                            }, jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(t))
                            }, jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(t))
                            }, jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(t))
                            }, jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(t))
                            }, jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(t))
                            }, jspb.BinaryWriter.prototype.writeInt32 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, t))
                            }, jspb.BinaryWriter.prototype.writeInt32String = function(e, t) {
                                null != t && (t = parseInt(t, 10), goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, t))
                            }, jspb.BinaryWriter.prototype.writeInt64 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(e, t))
                            }, jspb.BinaryWriter.prototype.writeInt64String = function(e, t) {
                                null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(t.lo, t.hi))
                            }, jspb.BinaryWriter.prototype.writeUint32 = function(e, t) {
                                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, t))
                            }, jspb.BinaryWriter.prototype.writeUint32String = function(e, t) {
                                null != t && (t = parseInt(t, 10), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, t))
                            }, jspb.BinaryWriter.prototype.writeUint64 = function(e, t) {
                                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(e, t))
                            }, jspb.BinaryWriter.prototype.writeUint64String = function(e, t) {
                                null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(t.lo, t.hi))
                            }, jspb.BinaryWriter.prototype.writeSint32 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(e, t))
                            }, jspb.BinaryWriter.prototype.writeSint64 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(e, t))
                            }, jspb.BinaryWriter.prototype.writeSint64String = function(e, t) {
                                null != t && (goog.asserts.assert(+t >= -jspb.BinaryConstants.TWO_TO_63 && +t < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64String_(e, t))
                            }, jspb.BinaryWriter.prototype.writeFixed32 = function(e, t) {
                                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(t))
                            }, jspb.BinaryWriter.prototype.writeFixed64 = function(e, t) {
                                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(t))
                            }, jspb.BinaryWriter.prototype.writeFixed64String = function(e, t) {
                                null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(t.lo, t.hi))
                            }, jspb.BinaryWriter.prototype.writeSfixed32 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(t))
                            }, jspb.BinaryWriter.prototype.writeSfixed64 = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(t))
                            }, jspb.BinaryWriter.prototype.writeSfixed64String = function(e, t) {
                                null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(t.lo, t.hi))
                            }, jspb.BinaryWriter.prototype.writeFloat = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(t))
                            }, jspb.BinaryWriter.prototype.writeDouble = function(e, t) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(t))
                            }, jspb.BinaryWriter.prototype.writeBool = function(e, t) {
                                null != t && (goog.asserts.assert(goog.isBoolean(t) || goog.isNumber(t)), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(t))
                            }, jspb.BinaryWriter.prototype.writeEnum = function(e, t) {
                                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
                            }, jspb.BinaryWriter.prototype.writeString = function(e, t) {
                                null != t && (e = this.beginDelimited_(e), this.encoder_.writeString(t), this.endDelimited_(e))
                            }, jspb.BinaryWriter.prototype.writeBytes = function(e, t) {
                                null != t && (t = jspb.utils.byteSourceToUint8Array(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(t.length), this.appendUint8Array_(t))
                            }, jspb.BinaryWriter.prototype.writeMessage = function(e, t, o) {
                                null != t && (e = this.beginDelimited_(e), o(t, this), this.endDelimited_(e))
                            }, jspb.BinaryWriter.prototype.writeGroup = function(e, t, o) {
                                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), o(t, this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
                            }, jspb.BinaryWriter.prototype.writeFixedHash64 = function(e, t) {
                                null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(t))
                            }, jspb.BinaryWriter.prototype.writeVarintHash64 = function(e, t) {
                                null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(t))
                            }, jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeSignedVarint32_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeInt32String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeSignedVarint64_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeInt64String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeUnsignedVarint32_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeUint32String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeUnsignedVarint64_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeUint64String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeZigzagVarint32_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeZigzagVarint64_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeZigzagVarint64String_(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeFixed32(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeFixed64(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeFixed64String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeSfixed32(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeSfixed64(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeSfixed64String(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedFloat = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeFloat(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedDouble = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeDouble(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedBool = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeBool(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedEnum = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeEnum(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedString = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeString(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedBytes = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeBytes(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedMessage = function(e, t, o) {
                                if (null != t)
                                    for (var r = 0; r < t.length; r++) {
                                        var i = this.beginDelimited_(e);
                                        o(t[r], this), this.endDelimited_(i)
                                    }
                            }, jspb.BinaryWriter.prototype.writeRepeatedGroup = function(e, t, o) {
                                if (null != t)
                                    for (var r = 0; r < t.length; r++) this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), o(t[r], this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
                            }, jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeFixedHash64(e, t[o])
                            }, jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(e, t) {
                                if (null != t)
                                    for (var o = 0; o < t.length; o++) this.writeVarintHash64(e, t[o])
                            }, jspb.BinaryWriter.prototype.writePackedInt32 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedInt32String = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedInt64 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint64(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedInt64String = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) {
                                        var r = jspb.arith.Int64.fromString(t[o]);
                                        this.encoder_.writeSplitVarint64(r.lo, r.hi)
                                    }
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedUint32 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedUint32String = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedUint64 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint64(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedUint64String = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) {
                                        var r = jspb.arith.UInt64.fromString(t[o]);
                                        this.encoder_.writeSplitVarint64(r.lo, r.hi)
                                    }
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSint32 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint32(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSint64 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSint64String = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(parseInt(t[o], 10));
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedFixed32 = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeUint32(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedFixed64 = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeUint64(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedFixed64String = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) {
                                        var r = jspb.arith.UInt64.fromString(t[o]);
                                        this.encoder_.writeSplitFixed64(r.lo, r.hi)
                                    }
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSfixed32 = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeInt32(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSfixed64 = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeInt64(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedSfixed64String = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeInt64String(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedFloat = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeFloat(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedDouble = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeDouble(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedBool = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeBool(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedEnum = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeEnum(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(e, t) {
                                if (null != t && t.length) {
                                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                                    for (var o = 0; o < t.length; o++) this.encoder_.writeFixedHash64(t[o])
                                }
                            }, jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(e, t) {
                                if (null != t && t.length) {
                                    for (var e = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeVarintHash64(t[o]);
                                    this.endDelimited_(e)
                                }
                            }, jspb.BinaryIterator = function(e, t, o) {
                                this.elements_ = this.nextMethod_ = this.decoder_ = null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !0, this.init_(e, t, o)
                            }, jspb.BinaryIterator.prototype.init_ = function(e, t, o) {
                                e && t && (this.decoder_ = e, this.nextMethod_ = t), this.elements_ = o || null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !this.decoder_ && !this.elements_, this.next()
                            }, jspb.BinaryIterator.instanceCache_ = [], jspb.BinaryIterator.alloc = function(e, t, o) {
                                if (jspb.BinaryIterator.instanceCache_.length) {
                                    var r = jspb.BinaryIterator.instanceCache_.pop();
                                    return r.init_(e, t, o), r
                                }
                                return new jspb.BinaryIterator(e, t, o)
                            }, jspb.BinaryIterator.prototype.free = function() {
                                this.clear(), jspb.BinaryIterator.instanceCache_.length < 100 && jspb.BinaryIterator.instanceCache_.push(this)
                            }, jspb.BinaryIterator.prototype.clear = function() {
                                this.decoder_ && this.decoder_.free(), this.elements_ = this.nextMethod_ = this.decoder_ = null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !0
                            }, jspb.BinaryIterator.prototype.get = function() {
                                return this.nextValue_
                            }, jspb.BinaryIterator.prototype.atEnd = function() {
                                return this.atEnd_
                            }, jspb.BinaryIterator.prototype.next = function() {
                                var e = this.nextValue_;
                                return this.decoder_ ? this.decoder_.atEnd() ? (this.nextValue_ = null, this.atEnd_ = !0) : this.nextValue_ = this.nextMethod_.call(this.decoder_) : this.elements_ && (this.cursor_ == this.elements_.length ? (this.nextValue_ = null, this.atEnd_ = !0) : this.nextValue_ = this.elements_[this.cursor_++]), e
                            }, jspb.BinaryDecoder = function(e, t, o) {
                                this.bytes_ = null, this.tempHigh_ = this.tempLow_ = this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1, e && this.setBlock(e, t, o)
                            }, jspb.BinaryDecoder.instanceCache_ = [], jspb.BinaryDecoder.alloc = function(e, t, o) {
                                if (jspb.BinaryDecoder.instanceCache_.length) {
                                    var r = jspb.BinaryDecoder.instanceCache_.pop();
                                    return e && r.setBlock(e, t, o), r
                                }
                                return new jspb.BinaryDecoder(e, t, o)
                            }, jspb.BinaryDecoder.prototype.free = function() {
                                this.clear(), jspb.BinaryDecoder.instanceCache_.length < 100 && jspb.BinaryDecoder.instanceCache_.push(this)
                            }, jspb.BinaryDecoder.prototype.clone = function() {
                                return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
                            }, jspb.BinaryDecoder.prototype.clear = function() {
                                this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1
                            }, jspb.BinaryDecoder.prototype.getBuffer = function() {
                                return this.bytes_
                            }, jspb.BinaryDecoder.prototype.setBlock = function(e, t, o) {
                                this.bytes_ = jspb.utils.byteSourceToUint8Array(e), this.start_ = goog.isDef(t) ? t : 0, this.end_ = goog.isDef(o) ? this.start_ + o : this.bytes_.length, this.cursor_ = this.start_
                            }, jspb.BinaryDecoder.prototype.getEnd = function() {
                                return this.end_
                            }, jspb.BinaryDecoder.prototype.setEnd = function(e) {
                                this.end_ = e
                            }, jspb.BinaryDecoder.prototype.reset = function() {
                                this.cursor_ = this.start_
                            }, jspb.BinaryDecoder.prototype.getCursor = function() {
                                return this.cursor_
                            }, jspb.BinaryDecoder.prototype.setCursor = function(e) {
                                this.cursor_ = e
                            }, jspb.BinaryDecoder.prototype.advance = function(e) {
                                this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_)
                            }, jspb.BinaryDecoder.prototype.atEnd = function() {
                                return this.cursor_ == this.end_
                            }, jspb.BinaryDecoder.prototype.pastEnd = function() {
                                return this.cursor_ > this.end_
                            }, jspb.BinaryDecoder.prototype.getError = function() {
                                return this.error_ || this.cursor_ < 0 || this.cursor_ > this.end_
                            }, jspb.BinaryDecoder.prototype.readSplitVarint64_ = function() {
                                for (var e, t, o = 0, r = 0; r < 4; r++)
                                    if (o |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * r, e < 128) return this.tempLow_ = o >>> 0, void(this.tempHigh_ = 0);
                                if (o |= (127 & (e = this.bytes_[this.cursor_++])) << 28, t = 0 | (127 & e) >> 4, e < 128) this.tempLow_ = o >>> 0, this.tempHigh_ = t >>> 0;
                                else {
                                    for (r = 0; r < 5; r++)
                                        if (t |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * r + 3, e < 128) return this.tempLow_ = o >>> 0, void(this.tempHigh_ = t >>> 0);
                                    goog.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0
                                }
                            }, jspb.BinaryDecoder.prototype.skipVarint = function() {
                                for (; 128 & this.bytes_[this.cursor_];) this.cursor_++;
                                this.cursor_++
                            }, jspb.BinaryDecoder.prototype.unskipVarint = function(e) {
                                for (; 128 < e;) this.cursor_--, e >>>= 7;
                                this.cursor_--
                            }, jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
                                var e, t = this.bytes_,
                                    o = 127 & (e = t[this.cursor_ + 0]);
                                return e < 128 ? (this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (e = t[this.cursor_ + 1])) << 7, e < 128 ? (this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (e = t[this.cursor_ + 2])) << 14, e < 128 ? (this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (e = t[this.cursor_ + 3])) << 21, e < 128 ? (this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (15 & (e = t[this.cursor_ + 4])) << 28, e < 128 ? (this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), o >>> 0) : (this.cursor_ += 5, 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && goog.asserts.assert(!1), goog.asserts.assert(this.cursor_ <= this.end_), o)))))
                            }, jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32, jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
                                return this.readUnsignedVarint32().toString()
                            }, jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
                                return this.readSignedVarint32().toString()
                            }, jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
                                var e = this.readUnsignedVarint32();
                                return e >>> 1 ^ -(1 & e)
                            }, jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinUint64(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinUnsignedDecimalString(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinInt64(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinSignedDecimalString(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinZigzag64(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
                                return this.readZigzagVarint64().toString()
                            }, jspb.BinaryDecoder.prototype.readUint8 = function() {
                                var e = this.bytes_[this.cursor_ + 0];
                                return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e
                            }, jspb.BinaryDecoder.prototype.readUint16 = function() {
                                var e = this.bytes_[this.cursor_ + 0],
                                    t = this.bytes_[this.cursor_ + 1];
                                return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8
                            }, jspb.BinaryDecoder.prototype.readUint32 = function() {
                                var e = this.bytes_[this.cursor_ + 0],
                                    t = this.bytes_[this.cursor_ + 1],
                                    o = this.bytes_[this.cursor_ + 2],
                                    r = this.bytes_[this.cursor_ + 3];
                                return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8 | o << 16 | r << 24) >>> 0
                            }, jspb.BinaryDecoder.prototype.readUint64 = function() {
                                var e = this.readUint32(),
                                    t = this.readUint32();
                                return jspb.utils.joinUint64(e, t)
                            }, jspb.BinaryDecoder.prototype.readUint64String = function() {
                                var e = this.readUint32(),
                                    t = this.readUint32();
                                return jspb.utils.joinUnsignedDecimalString(e, t)
                            }, jspb.BinaryDecoder.prototype.readInt8 = function() {
                                var e = this.bytes_[this.cursor_ + 0];
                                return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e << 24 >> 24
                            }, jspb.BinaryDecoder.prototype.readInt16 = function() {
                                var e = this.bytes_[this.cursor_ + 0],
                                    t = this.bytes_[this.cursor_ + 1];
                                return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8) << 16 >> 16
                            }, jspb.BinaryDecoder.prototype.readInt32 = function() {
                                var e = this.bytes_[this.cursor_ + 0],
                                    t = this.bytes_[this.cursor_ + 1],
                                    o = this.bytes_[this.cursor_ + 2],
                                    r = this.bytes_[this.cursor_ + 3];
                                return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8 | o << 16 | r << 24
                            }, jspb.BinaryDecoder.prototype.readInt64 = function() {
                                var e = this.readUint32(),
                                    t = this.readUint32();
                                return jspb.utils.joinInt64(e, t)
                            }, jspb.BinaryDecoder.prototype.readInt64String = function() {
                                var e = this.readUint32(),
                                    t = this.readUint32();
                                return jspb.utils.joinSignedDecimalString(e, t)
                            }, jspb.BinaryDecoder.prototype.readFloat = function() {
                                var e = this.readUint32();
                                return jspb.utils.joinFloat32(e, 0)
                            }, jspb.BinaryDecoder.prototype.readDouble = function() {
                                var e = this.readUint32(),
                                    t = this.readUint32();
                                return jspb.utils.joinFloat64(e, t)
                            }, jspb.BinaryDecoder.prototype.readBool = function() {
                                return !!this.bytes_[this.cursor_++]
                            }, jspb.BinaryDecoder.prototype.readEnum = function() {
                                return this.readSignedVarint32()
                            }, jspb.BinaryDecoder.prototype.readString = function(e) {
                                var t = this.bytes_,
                                    o = this.cursor_;
                                e = o + e;
                                for (var r, i, n, s = [], a = ""; o < e;) {
                                    if ((n = t[o++]) < 128) s.push(n);
                                    else {
                                        if (n < 192) continue;
                                        n < 224 ? (r = t[o++], s.push((31 & n) << 6 | 63 & r)) : n < 240 ? (r = t[o++], i = t[o++], s.push((15 & n) << 12 | (63 & r) << 6 | 63 & i)) : n < 248 && (n = (n = (7 & n) << 18 | (63 & (r = t[o++])) << 12 | (63 & (i = t[o++])) << 6 | 63 & t[o++]) - 65536, s.push(55296 + (n >> 10 & 1023), 56320 + (1023 & n)))
                                    }
                                    8192 <= s.length && (a += String.fromCharCode.apply(null, s), s.length = 0)
                                }
                                return a += goog.crypt.byteArrayToString(s), this.cursor_ = o, a
                            }, jspb.BinaryDecoder.prototype.readStringWithLength = function() {
                                var e = this.readUnsignedVarint32();
                                return this.readString(e)
                            }, jspb.BinaryDecoder.prototype.readBytes = function(e) {
                                if (e < 0 || this.cursor_ + e > this.bytes_.length) return this.error_ = !0, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
                                var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
                                return this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_), t
                            }, jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
                                return this.readSplitVarint64_(), jspb.utils.joinHash64(this.tempLow_, this.tempHigh_)
                            }, jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
                                var e = this.bytes_,
                                    t = this.cursor_,
                                    o = e[t + 0],
                                    r = e[t + 1],
                                    i = e[t + 2],
                                    n = e[t + 3],
                                    s = e[t + 4],
                                    a = e[t + 5],
                                    p = e[t + 6],
                                    e = e[t + 7];
                                return this.cursor_ += 8, String.fromCharCode(o, r, i, n, s, a, p, e)
                            }, jspb.BinaryReader = function(e, t, o) {
                                this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o), this.fieldCursor_ = this.decoder_.getCursor(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null
                            }, jspb.BinaryReader.instanceCache_ = [], jspb.BinaryReader.alloc = function(e, t, o) {
                                if (jspb.BinaryReader.instanceCache_.length) {
                                    var r = jspb.BinaryReader.instanceCache_.pop();
                                    return e && r.decoder_.setBlock(e, t, o), r
                                }
                                return new jspb.BinaryReader(e, t, o)
                            }, jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc, jspb.BinaryReader.prototype.free = function() {
                                this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, jspb.BinaryReader.instanceCache_.length < 100 && jspb.BinaryReader.instanceCache_.push(this)
                            }, jspb.BinaryReader.prototype.getFieldCursor = function() {
                                return this.fieldCursor_
                            }, jspb.BinaryReader.prototype.getCursor = function() {
                                return this.decoder_.getCursor()
                            }, jspb.BinaryReader.prototype.getBuffer = function() {
                                return this.decoder_.getBuffer()
                            }, jspb.BinaryReader.prototype.getFieldNumber = function() {
                                return this.nextField_
                            }, jspb.BinaryReader.prototype.getWireType = function() {
                                return this.nextWireType_
                            }, jspb.BinaryReader.prototype.isEndGroup = function() {
                                return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
                            }, jspb.BinaryReader.prototype.getError = function() {
                                return this.error_ || this.decoder_.getError()
                            }, jspb.BinaryReader.prototype.setBlock = function(e, t, o) {
                                this.decoder_.setBlock(e, t, o), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
                            }, jspb.BinaryReader.prototype.reset = function() {
                                this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
                            }, jspb.BinaryReader.prototype.advance = function(e) {
                                this.decoder_.advance(e)
                            }, jspb.BinaryReader.prototype.nextField = function() {
                                if (this.decoder_.atEnd()) return !1;
                                if (this.getError()) return goog.asserts.fail("Decoder hit an error"), !1;
                                this.fieldCursor_ = this.decoder_.getCursor();
                                var e, t = (e = this.decoder_.readUnsignedVarint32()) >>> 3;
                                return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (goog.asserts.fail("Invalid wire type"), !(this.error_ = !0)) : (this.nextField_ = t, this.nextWireType_ = e, !0)
                            }, jspb.BinaryReader.prototype.unskipHeader = function() {
                                this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
                            }, jspb.BinaryReader.prototype.skipMatchingFields = function() {
                                var e = this.nextField_;
                                for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e;) this.skipField();
                                this.decoder_.atEnd() || this.unskipHeader()
                            }, jspb.BinaryReader.prototype.skipVarintField = function() {
                                this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint()
                            }, jspb.BinaryReader.prototype.skipDelimitedField = function() {
                                var e;
                                this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED ? (goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField()) : (e = this.decoder_.readUnsignedVarint32(), this.decoder_.advance(e))
                            }, jspb.BinaryReader.prototype.skipFixed32Field = function() {
                                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4)
                            }, jspb.BinaryReader.prototype.skipFixed64Field = function() {
                                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8)
                            }, jspb.BinaryReader.prototype.skipGroup = function() {
                                var e = [this.nextField_];
                                do {
                                    if (!this.nextField()) {
                                        goog.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
                                        break
                                    }
                                    if (this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP) e.push(this.nextField_);
                                    else if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP && this.nextField_ != e.pop()) {
                                        goog.asserts.fail("Unmatched end-group tag"), this.error_ = !0;
                                        break
                                    }
                                } while (0 < e.length)
                            }, jspb.BinaryReader.prototype.skipField = function() {
                                switch (this.nextWireType_) {
                                    case jspb.BinaryConstants.WireType.VARINT:
                                        this.skipVarintField();
                                        break;
                                    case jspb.BinaryConstants.WireType.FIXED64:
                                        this.skipFixed64Field();
                                        break;
                                    case jspb.BinaryConstants.WireType.DELIMITED:
                                        this.skipDelimitedField();
                                        break;
                                    case jspb.BinaryConstants.WireType.FIXED32:
                                        this.skipFixed32Field();
                                        break;
                                    case jspb.BinaryConstants.WireType.START_GROUP:
                                        this.skipGroup();
                                        break;
                                    default:
                                        goog.asserts.fail("Invalid wire encoding for field.")
                                }
                            }, jspb.BinaryReader.prototype.registerReadCallback = function(e, t) {
                                goog.isNull(this.readCallbacks_) && (this.readCallbacks_ = {}), goog.asserts.assert(!this.readCallbacks_[e]), this.readCallbacks_[e] = t
                            }, jspb.BinaryReader.prototype.runReadCallback = function(e) {
                                return goog.asserts.assert(!goog.isNull(this.readCallbacks_)), e = this.readCallbacks_[e], goog.asserts.assert(e), e(this)
                            }, jspb.BinaryReader.prototype.readAny = function(e) {
                                this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
                                var t = jspb.BinaryConstants.FieldType;
                                switch (e) {
                                    case t.DOUBLE:
                                        return this.readDouble();
                                    case t.FLOAT:
                                        return this.readFloat();
                                    case t.INT64:
                                        return this.readInt64();
                                    case t.UINT64:
                                        return this.readUint64();
                                    case t.INT32:
                                        return this.readInt32();
                                    case t.FIXED64:
                                        return this.readFixed64();
                                    case t.FIXED32:
                                        return this.readFixed32();
                                    case t.BOOL:
                                        return this.readBool();
                                    case t.STRING:
                                        return this.readString();
                                    case t.GROUP:
                                        goog.asserts.fail("Group field type not supported in readAny()");
                                    case t.MESSAGE:
                                        goog.asserts.fail("Message field type not supported in readAny()");
                                    case t.BYTES:
                                        return this.readBytes();
                                    case t.UINT32:
                                        return this.readUint32();
                                    case t.ENUM:
                                        return this.readEnum();
                                    case t.SFIXED32:
                                        return this.readSfixed32();
                                    case t.SFIXED64:
                                        return this.readSfixed64();
                                    case t.SINT32:
                                        return this.readSint32();
                                    case t.SINT64:
                                        return this.readSint64();
                                    case t.FHASH64:
                                        return this.readFixedHash64();
                                    case t.VHASH64:
                                        return this.readVarintHash64();
                                    default:
                                        goog.asserts.fail("Invalid field type in readAny()")
                                }
                                return 0
                            }, jspb.BinaryReader.prototype.readMessage = function(e, t) {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                                var o = this.decoder_.getEnd(),
                                    r = this.decoder_.readUnsignedVarint32(),
                                    r = this.decoder_.getCursor() + r;
                                this.decoder_.setEnd(r), t(e, this), this.decoder_.setCursor(r), this.decoder_.setEnd(o)
                            }, jspb.BinaryReader.prototype.readGroup = function(e, t, o) {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), goog.asserts.assert(this.nextField_ == e), o(t, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = !0)
                            }, jspb.BinaryReader.prototype.getFieldDecoder = function() {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                                var e = this.decoder_.readUnsignedVarint32(),
                                    t = this.decoder_.getCursor(),
                                    o = t + e,
                                    e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e);
                                return this.decoder_.setCursor(o), e
                            }, jspb.BinaryReader.prototype.readInt32 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32()
                            }, jspb.BinaryReader.prototype.readInt32String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32String()
                            }, jspb.BinaryReader.prototype.readInt64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
                            }, jspb.BinaryReader.prototype.readInt64String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64String()
                            }, jspb.BinaryReader.prototype.readUint32 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32()
                            }, jspb.BinaryReader.prototype.readUint32String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32String()
                            }, jspb.BinaryReader.prototype.readUint64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64()
                            }, jspb.BinaryReader.prototype.readUint64String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64String()
                            }, jspb.BinaryReader.prototype.readSint32 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint32()
                            }, jspb.BinaryReader.prototype.readSint64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64()
                            }, jspb.BinaryReader.prototype.readSint64String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64String()
                            }, jspb.BinaryReader.prototype.readFixed32 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readUint32()
                            }, jspb.BinaryReader.prototype.readFixed64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64()
                            }, jspb.BinaryReader.prototype.readFixed64String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64String()
                            }, jspb.BinaryReader.prototype.readSfixed32 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32()
                            }, jspb.BinaryReader.prototype.readSfixed32String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32().toString()
                            }, jspb.BinaryReader.prototype.readSfixed64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64()
                            }, jspb.BinaryReader.prototype.readSfixed64String = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64String()
                            }, jspb.BinaryReader.prototype.readFloat = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readFloat()
                            }, jspb.BinaryReader.prototype.readDouble = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readDouble()
                            }, jspb.BinaryReader.prototype.readBool = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), !!this.decoder_.readUnsignedVarint32()
                            }, jspb.BinaryReader.prototype.readEnum = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
                            }, jspb.BinaryReader.prototype.readString = function() {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                                var e = this.decoder_.readUnsignedVarint32();
                                return this.decoder_.readString(e)
                            }, jspb.BinaryReader.prototype.readBytes = function() {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                                var e = this.decoder_.readUnsignedVarint32();
                                return this.decoder_.readBytes(e)
                            }, jspb.BinaryReader.prototype.readVarintHash64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readVarintHash64()
                            }, jspb.BinaryReader.prototype.readFixedHash64 = function() {
                                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readFixedHash64()
                            }, jspb.BinaryReader.prototype.readPackedField_ = function(e) {
                                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                                for (var t = this.decoder_.readUnsignedVarint32(), o = (t = this.decoder_.getCursor() + t, []); this.decoder_.getCursor() < t;) o.push(e.call(this.decoder_));
                                return o
                            }, jspb.BinaryReader.prototype.readPackedInt32 = function() {
                                return this.readPackedField_(this.decoder_.readSignedVarint32)
                            }, jspb.BinaryReader.prototype.readPackedInt32String = function() {
                                return this.readPackedField_(this.decoder_.readSignedVarint32String)
                            }, jspb.BinaryReader.prototype.readPackedInt64 = function() {
                                return this.readPackedField_(this.decoder_.readSignedVarint64)
                            }, jspb.BinaryReader.prototype.readPackedInt64String = function() {
                                return this.readPackedField_(this.decoder_.readSignedVarint64String)
                            }, jspb.BinaryReader.prototype.readPackedUint32 = function() {
                                return this.readPackedField_(this.decoder_.readUnsignedVarint32)
                            }, jspb.BinaryReader.prototype.readPackedUint32String = function() {
                                return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
                            }, jspb.BinaryReader.prototype.readPackedUint64 = function() {
                                return this.readPackedField_(this.decoder_.readUnsignedVarint64)
                            }, jspb.BinaryReader.prototype.readPackedUint64String = function() {
                                return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
                            }, jspb.BinaryReader.prototype.readPackedSint32 = function() {
                                return this.readPackedField_(this.decoder_.readZigzagVarint32)
                            }, jspb.BinaryReader.prototype.readPackedSint64 = function() {
                                return this.readPackedField_(this.decoder_.readZigzagVarint64)
                            }, jspb.BinaryReader.prototype.readPackedSint64String = function() {
                                return this.readPackedField_(this.decoder_.readZigzagVarint64String)
                            }, jspb.BinaryReader.prototype.readPackedFixed32 = function() {
                                return this.readPackedField_(this.decoder_.readUint32)
                            }, jspb.BinaryReader.prototype.readPackedFixed64 = function() {
                                return this.readPackedField_(this.decoder_.readUint64)
                            }, jspb.BinaryReader.prototype.readPackedFixed64String = function() {
                                return this.readPackedField_(this.decoder_.readUint64String)
                            }, jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
                                return this.readPackedField_(this.decoder_.readInt32)
                            }, jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
                                return this.readPackedField_(this.decoder_.readInt64)
                            }, jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
                                return this.readPackedField_(this.decoder_.readInt64String)
                            }, jspb.BinaryReader.prototype.readPackedFloat = function() {
                                return this.readPackedField_(this.decoder_.readFloat)
                            }, jspb.BinaryReader.prototype.readPackedDouble = function() {
                                return this.readPackedField_(this.decoder_.readDouble)
                            }, jspb.BinaryReader.prototype.readPackedBool = function() {
                                return this.readPackedField_(this.decoder_.readBool)
                            }, jspb.BinaryReader.prototype.readPackedEnum = function() {
                                return this.readPackedField_(this.decoder_.readEnum)
                            }, jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
                                return this.readPackedField_(this.decoder_.readVarintHash64)
                            }, jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
                                return this.readPackedField_(this.decoder_.readFixedHash64)
                            }, jspb.Export = {}, exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = {
                                extend: goog.object.extend
                            }, exports.typeOf = goog.typeOf
                        }).call(this, __nested_webpack_require_61379__(20), __nested_webpack_require_61379__(42).Buffer)
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            i = (o = o(0)) && o.__esModule ? o : {
                                default: o
                            };

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        r(s, [{
                            key: "setBaggageItem",
                            value: function(e, t) {
                                this._baggage[e] = t
                            }
                        }, {
                            key: "getBaggageItem",
                            value: function(e) {
                                return this._baggage[e]
                            }
                        }, {
                            key: "forEachBaggageItem",
                            value: function(o) {
                                (0, i.default)(this._baggage, function(e, t) {
                                    o(t, e)
                                })
                            }
                        }, {
                            key: "traceGUID",
                            value: function() {
                                return "" + this._upperTraceGUID + this._traceGUID
                            }
                        }]), r = s;

                        function s(e, t, o) {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._baggage = {}, this._guid = e, !(this._sampled = !0) === o && (this._sampled = o), this._upperTraceGUID = "0000000000000000", this._traceGUID = t, this._traceGUID && 32 === this._traceGUID.length && (this._upperTraceGUID = t.substr(0, 16), this._traceGUID = t.substr(16))
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        t.LOG_INFO = 0, t.LOG_WARN = 1, t.LOG_ERROR = 2, t.LOG_FATAL = 3;
                        t.LOG_LEVEL_TO_STRING = {
                            LOG_INFO: "I",
                            LOG_WARN: "W",
                            LOG_ERROR: "E",
                            LOG_FATAL: "F"
                        }, t.LOG_STRING_TO_LEVEL = {
                            I: 0,
                            W: 1,
                            E: 2,
                            F: 3
                        }, t.CLOCK_STATE_REFRESH_INTERVAL_MS = 350, t.LIGHTSTEP_APP_URL_PREFIX = "https://app.lightstep.com", t.JOIN_ID_PREFIX = "join:", t.LS_META_EVENT_KEY = "lightstep.meta_event", t.LS_META_PROPAGATION_KEY = "lightstep.propagation_format", t.LS_META_TRACE_KEY = "lightstep.trace_id", t.LS_META_SPAN_KEY = "lightstep.span_id", t.LS_META_TRACER_GUID_KEY = "lightstep.tracer_guid", t.LS_META_EXTRACT = "lightstep.extract_span", t.LS_META_INJECT = "lightstep.inject_span", t.LS_META_SP_START = "lightstep.span_start", t.LS_META_SP_FINISH = "lightstep.span_finish", t.LS_META_TRACER_CREATE = "lightstep.tracer_create", t.FORMAT_B3 = "format.b3"
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && i(e.prototype, t), o && i(e, o), e
                            },
                            p = n(o(0)),
                            l = n(o(7));

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        function n(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var s = "ot-tracer-",
                            a = "ot-baggage-",
                            r = (r(g, [{
                                key: "inject",
                                value: function(e, o) {
                                    var r = this;
                                    if (o) {
                                        if ("object" == _typeof(o)) return o[this._carrierPrefix + "spanid"] = e._guid, o[this._carrierPrefix + "traceid"] = e._traceGUID, o[this._carrierPrefix + "sampled"] = "true", e.forEachBaggageItem(function(e, t) {
                                            o["" + r._baggagePrefix + e] = t
                                        }), o;
                                        this._tracer._error("Unexpected '" + _typeof(o) + "' FORMAT_TEXT_MAP carrier in call to inject")
                                    } else this._tracer._error("Unexpected null carrier in call to inject")
                                }
                            }, {
                                key: "extract",
                                value: function(e) {
                                    var o = this,
                                        r = 0,
                                        i = null,
                                        n = null,
                                        s = !0;
                                    if ((0, p.default)(e, function(e, t) {
                                            if ((t = t.toLowerCase()).substr(0, o._carrierPrefix.length) === o._carrierPrefix) switch (t.substr(o._carrierPrefix.length)) {
                                                case "traceid":
                                                    r++, n = e;
                                                    break;
                                                case "spanid":
                                                    r++, i = e;
                                                    break;
                                                case "sampled":
                                                    switch (e) {
                                                        case 0:
                                                        case "0":
                                                        case !1:
                                                        case "false":
                                                            s = !1;
                                                            break;
                                                        default:
                                                            s = !0
                                                    }
                                                    break;
                                                default:
                                                    o._tracer._error("Unrecognized carrier key '" + t + "' with recognized prefix. Ignoring.")
                                            }
                                        }), 0 === r) return null;
                                    if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + e), null;
                                    var a = new l.default(i, n, s);
                                    return (0, p.default)(e, function(e, t) {
                                        (t = t.toLowerCase()).substr(0, o._baggagePrefix.length) === o._baggagePrefix && (t = t.substr(o._baggagePrefix.length), a.setBaggageItem(t, e))
                                    }), a
                                }
                            }]), g);

                        function g(e) {
                            ! function(e) {
                                if (!(e instanceof g)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._tracer = e, this._carrierPrefix = s, this._baggagePrefix = a
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(5),
                            i = o(13),
                            n = o(11);
                        t.tracer = null, t.spanContext = null, t.span = null, t.initialize = function() {
                            t.tracer = new n.default, t.span = new r.default, t.spanContext = new i.default
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(14),
                            i = o(10),
                            n = o(5),
                            o = (s.prototype.startSpan = function(e, t) {
                                var o;
                                return void 0 === t && (t = {}), t.childOf && (o = r.childOf(t.childOf), t.references ? t.references.push(o) : t.references = [o], delete t.childOf), this._startSpan(e, t)
                            }, s.prototype.inject = function(e, t, o) {
                                return e instanceof n.default && (e = e.context()), this._inject(e, t, o)
                            }, s.prototype.extract = function(e, t) {
                                return this._extract(e, t)
                            }, s.prototype._startSpan = function(e, t) {
                                return i.span
                            }, s.prototype._inject = function(e, t, o) {}, s.prototype._extract = function(e, t) {
                                return i.spanContext
                            }, s);

                        function s() {}
                        t.Tracer = o, t.default = o
                    }, function(e, t, o) {
                        var r = o(6),
                            i = r,
                            o = Function("return this")();
                        i.exportSymbol("proto.google.protobuf.Timestamp", null, o), proto.google.protobuf.Timestamp = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.Timestamp, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.Timestamp.displayName = "proto.google.protobuf.Timestamp"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.Timestamp.prototype.toObject = function(e) {
                            return proto.google.protobuf.Timestamp.toObject(e, this)
                        }, proto.google.protobuf.Timestamp.toObject = function(e, t) {
                            var o = {
                                seconds: r.Message.getFieldWithDefault(t, 1, 0),
                                nanos: r.Message.getFieldWithDefault(t, 2, 0)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.Timestamp.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.Timestamp;
                            return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readInt64();
                                    e.setSeconds(o);
                                    break;
                                case 2:
                                    o = t.readInt32(), e.setNanos(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 !== (o = e.getSeconds()) && t.writeInt64(1, o), 0 !== (o = e.getNanos()) && t.writeInt32(2, o)
                        }, proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.google.protobuf.Timestamp.prototype.setSeconds = function(e) {
                            r.Message.setProto3IntField(this, 1, e)
                        }, proto.google.protobuf.Timestamp.prototype.getNanos = function() {
                            return r.Message.getFieldWithDefault(this, 2, 0)
                        }, proto.google.protobuf.Timestamp.prototype.setNanos = function(e) {
                            r.Message.setProto3IntField(this, 2, e)
                        }, i.object.extend(t, proto.google.protobuf), proto.google.protobuf.Timestamp.prototype.toDate = function() {
                            var e = this.getSeconds(),
                                t = this.getNanos();
                            return new Date(1e3 * e + t / 1e6)
                        }, proto.google.protobuf.Timestamp.prototype.fromDate = function(e) {
                            this.setSeconds(Math.floor(e.getTime() / 1e3)), this.setNanos(1e6 * e.getMilliseconds())
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = (i.prototype.toTraceId = function() {
                            return ""
                        }, i.prototype.toSpanId = function() {
                            return ""
                        }, i);

                        function i() {}
                        t.SpanContext = r, t.default = r
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(15),
                            i = o(16),
                            n = o(5);
                        t.childOf = function(e) {
                            return e instanceof n.default && (e = e.context()), new i.default(r.REFERENCE_CHILD_OF, e)
                        }, t.followsFrom = function(e) {
                            return e instanceof n.default && (e = e.context()), new i.default(r.REFERENCE_FOLLOWS_FROM, e)
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.FORMAT_BINARY = "binary", t.FORMAT_TEXT_MAP = "text_map", t.FORMAT_HTTP_HEADERS = "http_headers", t.REFERENCE_CHILD_OF = "child_of", t.REFERENCE_FOLLOWS_FROM = "follows_from"
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(5),
                            o = (i.prototype.type = function() {
                                return this._type
                            }, i.prototype.referencedContext = function() {
                                return this._referencedContext
                            }, i);

                        function i(e, t) {
                            this._type = e, this._referencedContext = t instanceof r.default ? t.context() : t
                        }
                        t.default = o
                    }, function(e, t, o) {
                        "use strict";
                        var r, i = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                                })(e, t)
                        }, function(e, t) {
                            function o() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, i = (n = o(2).SpanContext, i(s, n), s.prototype.span = function() {
                            return this._span
                        }, s);

                        function s(e) {
                            var t = n.call(this) || this;
                            return t._span = e, t
                        }
                        t.MockContext = i, t.default = i
                    }, function(e, t, o) {
                        "use strict";
                        var r, i = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                                })(e, t)
                        }, function(e, t) {
                            function o() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, s = o(2),
                            a = o(17),
                            i = (n = s.Span, i(p, n), p.prototype._context = function() {
                                return new a.default(this)
                            }, p.prototype._setOperationName = function(e) {
                                this._operationName = e
                            }, p.prototype._addTags = function(e) {
                                for (var t = 0, o = Object.keys(e); t < o.length; t++) {
                                    var r = o[t];
                                    this._tags[r] = e[r]
                                }
                            }, p.prototype._log = function(e, t) {
                                this._logs.push({
                                    fields: e,
                                    timestamp: t
                                })
                            }, p.prototype._finish = function(e) {
                                this._finishMs = e || Date.now()
                            }, p.prototype.uuid = function() {
                                return this._uuid
                            }, p.prototype.operationName = function() {
                                return this._operationName
                            }, p.prototype.durationMs = function() {
                                return this._finishMs - this._startMs
                            }, p.prototype.tags = function() {
                                return this._tags
                            }, p.prototype.tracer = function() {
                                return this._mockTracer
                            }, p.prototype._generateUUID = function() {
                                return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                            }, p.prototype.addReference = function(e) {}, p.prototype.debug = function() {
                                var e = {
                                    uuid: this._uuid,
                                    operation: this._operationName,
                                    millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                                };
                                return Object.keys(this._tags).length && (e.tags = this._tags), e
                            }, p);

                        function p(e) {
                            var t = n.call(this) || this;
                            return t._mockTracer = e, t._uuid = t._generateUUID(), t._startMs = Date.now(), t._finishMs = 0, t._operationName = "", t._tags = {}, t._logs = [], t
                        }
                        t.MockSpan = i, t.default = i
                    }, function(e, t, o) {
                        "use strict";

                        function r() {
                            return "undefined" != typeof document
                        }
                        e.exports = {
                            cookie: r() ? function(e, t, o, r, i, n) {
                                if (1 < arguments.length) {
                                    n = e + "=" + encodeURIComponent(t) + (o ? "; expires=" + new Date(+new Date + 1e3 * o).toUTCString() : "") + (r ? "; path=" + r : "") + (i ? "; domain=" + i : "") + (n ? "; secure" : "");
                                    return document.cookie = n
                                }
                                return decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
                            } : function() {
                                return null
                            },
                            isBrowser: r
                        }
                    }, function(e, t) {
                        var o = function() {
                            return this
                        }();
                        try {
                            o = o || Function("return this")() || (0, eval)("this")
                        } catch (e) {
                            "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (o = window)
                        }
                        e.exports = o
                    }, function(e, t, o) {
                        "use strict";
                        var r, i;
                        r = {}, void 0 === (i = {}) && (i = {}), i.KeyValue = function(e) {
                            if (this.Key = null, this.Value = null, e) {
                                if (void 0 === e.Key) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Key is unset!");
                                if (this.Key = e.Key, void 0 === e.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                                this.Value = e.Value
                            }
                        }, i.KeyValue.prototype = {}, i.KeyValue.prototype.read = !1, i.KeyValue.prototype.write = !1, i.NamedCounter = function(e) {
                            if (this.Name = null, this.Value = null, e) {
                                if (void 0 === e.Name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Name is unset!");
                                if (this.Name = e.Name, void 0 === e.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                                this.Value = e.Value
                            }
                        }, i.NamedCounter.prototype = {}, i.NamedCounter.prototype.read = !1, i.NamedCounter.prototype.write = !1, i.Runtime = function(e) {
                            this.guid = null, this.start_micros = null, this.group_name = null, this.attrs = null, e && (void 0 !== e.guid && (this.guid = e.guid), void 0 !== e.start_micros && (this.start_micros = e.start_micros), void 0 !== e.group_name && (this.group_name = e.group_name), void 0 !== e.attrs && (this.attrs = e.attrs))
                        }, i.Runtime.prototype = {}, i.Runtime.prototype.read = !1, i.Runtime.prototype.write = !1, i.LogRecord = function(e) {
                            this.timestamp_micros = null, this.fields = null, this.runtime_guid = null, this.span_guid = null, this.stable_name = null, this.message = null, this.level = null, this.thread_id = null, this.filename = null, this.line_number = null, this.stack_frames = null, this.payload_json = null, this.error_flag = null, e && (void 0 !== e.timestamp_micros && (this.timestamp_micros = e.timestamp_micros), void 0 !== e.fields && (this.fields = e.fields), void 0 !== e.runtime_guid && (this.runtime_guid = e.runtime_guid), void 0 !== e.span_guid && (this.span_guid = e.span_guid), void 0 !== e.stable_name && (this.stable_name = e.stable_name), void 0 !== e.message && (this.message = e.message), void 0 !== e.level && (this.level = e.level), void 0 !== e.thread_id && (this.thread_id = e.thread_id), void 0 !== e.filename && (this.filename = e.filename), void 0 !== e.line_number && (this.line_number = e.line_number), void 0 !== e.stack_frames && (this.stack_frames = e.stack_frames), void 0 !== e.payload_json && (this.payload_json = e.payload_json), void 0 !== e.error_flag && (this.error_flag = e.error_flag))
                        }, i.LogRecord.prototype = {}, i.LogRecord.prototype.read = !1, i.LogRecord.prototype.write = !1, i.TraceJoinId = function(e) {
                            if (this.TraceKey = null, this.Value = null, e) {
                                if (void 0 === e.TraceKey) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field TraceKey is unset!");
                                if (this.TraceKey = e.TraceKey, void 0 === e.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                                this.Value = e.Value
                            }
                        }, i.TraceJoinId.prototype = {}, i.TraceJoinId.prototype.read = !1, i.TraceJoinId.prototype.write = !1, i.SpanRecord = function(e) {
                            this.span_guid = null, this.trace_guid = null, this.runtime_guid = null, this.span_name = null, this.join_ids = null, this.oldest_micros = null, this.youngest_micros = null, this.attributes = null, this.error_flag = null, this.log_records = null, e && (void 0 !== e.span_guid && (this.span_guid = e.span_guid), void 0 !== e.trace_guid && (this.trace_guid = e.trace_guid), void 0 !== e.runtime_guid && (this.runtime_guid = e.runtime_guid), void 0 !== e.span_name && (this.span_name = e.span_name), void 0 !== e.join_ids && (this.join_ids = e.join_ids), void 0 !== e.oldest_micros && (this.oldest_micros = e.oldest_micros), void 0 !== e.youngest_micros && (this.youngest_micros = e.youngest_micros), void 0 !== e.attributes && (this.attributes = e.attributes), void 0 !== e.error_flag && (this.error_flag = e.error_flag), void 0 !== e.log_records && (this.log_records = e.log_records))
                        }, i.SpanRecord.prototype = {}, i.SpanRecord.prototype.read = !1, i.SpanRecord.prototype.write = !1, i.Auth = function(e) {
                            this.access_token = null, e && void 0 !== e.access_token && (this.access_token = e.access_token)
                        }, i.Auth.prototype = {}, i.Auth.prototype.read = !1, i.Auth.prototype.write = !1, i.Timing = function(e) {
                            this.receive_micros = null, this.transmit_micros = null, e && (void 0 !== e.receive_micros && (this.receive_micros = e.receive_micros), void 0 !== e.transmit_micros && (this.transmit_micros = e.transmit_micros))
                        }, i.Timing.prototype = {}, i.Timing.prototype.read = !1, i.Timing.prototype.write = !1, i.SampleCount = function(e) {
                            this.oldest_micros = null, this.youngest_micros = null, this.count = null, e && (void 0 !== e.oldest_micros && (this.oldest_micros = e.oldest_micros), void 0 !== e.youngest_micros && (this.youngest_micros = e.youngest_micros), void 0 !== e.count && (this.count = e.count))
                        }, i.SampleCount.prototype = {}, i.SampleCount.prototype.read = !1, i.SampleCount.prototype.write = !1, i.MetricsSample = function(e) {
                            if (this.name = null, this.int64_value = null, this.double_value = null, e) {
                                if (void 0 === e.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
                                this.name = e.name, void 0 !== e.int64_value && (this.int64_value = e.int64_value), void 0 !== e.double_value && (this.double_value = e.double_value)
                            }
                        }, i.MetricsSample.prototype = {}, i.MetricsSample.prototype.read = !1, i.MetricsSample.prototype.write = !1, i.Metrics = function(e) {
                            this.counts = null, this.gauges = null, e && (void 0 !== e.counts && (this.counts = e.counts), void 0 !== e.gauges && (this.gauges = e.gauges))
                        }, i.Metrics.prototype = {}, i.Metrics.prototype.read = !1, i.Metrics.prototype.write = !1, i.ReportRequest = function(e) {
                            this.runtime = null, this.span_records = null, this.log_records = null, this.timestamp_offset_micros = null, this.oldest_micros = null, this.youngest_micros = null, this.counters = null, this.internal_logs = null, this.internal_metrics = null, e && (void 0 !== e.runtime && (this.runtime = e.runtime), void 0 !== e.span_records && (this.span_records = e.span_records), void 0 !== e.log_records && (this.log_records = e.log_records), void 0 !== e.timestamp_offset_micros && (this.timestamp_offset_micros = e.timestamp_offset_micros), void 0 !== e.oldest_micros && (this.oldest_micros = e.oldest_micros), void 0 !== e.youngest_micros && (this.youngest_micros = e.youngest_micros), void 0 !== e.counters && (this.counters = e.counters), void 0 !== e.internal_logs && (this.internal_logs = e.internal_logs), void 0 !== e.internal_metrics && (this.internal_metrics = e.internal_metrics))
                        }, i.ReportRequest.prototype = {}, i.ReportRequest.prototype.read = !1, i.ReportRequest.prototype.write = !1, i.Command = function(e) {
                            this.disable = null, e && void 0 !== e.disable && (this.disable = e.disable)
                        }, i.Command.prototype = {}, i.Command.prototype.read = !1, i.Command.prototype.write = !1, i.ReportResponse = function(e) {
                            this.commands = null, this.timing = null, e && (void 0 !== e.commands && (this.commands = e.commands), void 0 !== e.timing && (this.timing = e.timing))
                        }, i.ReportResponse.prototype = {}, i.ReportResponse.prototype.read = !1, i.ReportResponse.prototype.write = !1, e.exports.crouton_thrift = i, e.exports.Thrift = {}
                    }, function(e, t, o) {
                        "use strict";

                        function r(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = (function(e, t, o) {
                            return t && r(e.prototype, t), o && r(e, o), e
                        }(n, [{
                            key: "detachedTimeout",
                            value: function(e, t) {
                                t = setTimeout(e, t);
                                return t.unref && t.unref(), t
                            }
                        }, {
                            key: "shouldSendMetaSpan",
                            value: function(e, t) {
                                return !0 === e.meta_event_reporting && !0 !== t["lightstep.meta_event"]
                            }
                        }]), n);

                        function n() {
                            ! function(e) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this)
                        }
                        t.default = new i, e.exports = t.default
                    }, function(e, t) {
                        function p(e, t, o) {
                            for (var r = [], i = Math.max(e.length, t.length), n = 0, s = 0; s < i || n;) {
                                var a = n + (s < e.length ? e[s] : 0) + (s < t.length ? t[s] : 0);
                                r.push(a % o), n = Math.floor(a / o), s++
                            }
                            return r
                        }

                        function l(e, t, o) {
                            if (e < 0) return null;
                            if (0 == e) return [];
                            for (var r = [], i = t; 1 & e && (r = p(r, i, o)), 0 != (e >>= 1);) i = p(i, i, o);
                            return r
                        }

                        function o(n, e, t) {
                            var o = function(e) {
                                for (var t = n.split(""), o = [], r = t.length - 1; 0 <= r; r--) {
                                    var i = parseInt(t[r], e);
                                    if (isNaN(i)) return null;
                                    o.push(i)
                                }
                                return o
                            }(e);
                            if (null === o) return null;
                            for (var r = [], i = [1], s = 0; s < o.length; s++) o[s] && (r = p(r, l(o[s], i, t), t)), i = l(e, i, t);
                            for (var a = "", s = r.length - 1; 0 <= s; s--) a += r[s].toString(t);
                            return a
                        }
                        e.exports = {
                            hexToDec: function(e) {
                                return "0x" === e.substring(0, 2) && (e = e.substring(2)), o(e = e.toLowerCase(), 16, 10)
                            },
                            decToHex: function(e) {
                                e = o(e, 10, 16);
                                return e ? "0x" + e : null
                            }
                        }
                    }, function(e) {
                        e.exports = {
                            name: "lightstep-tracer",
                            version: "0.30.2",
                            main: "index.js",
                            types: "index.d.ts",
                            browser: "browser.js",
                            engines: {
                                node: ">=8.0.0"
                            },
                            scripts: {
                                test: "rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js",
                                version: "make build && git add -A dist"
                            },
                            license: "MIT",
                            repository: {
                                type: "git",
                                url: "http://github.com/lightstep/lightstep-tracer-javascript.git"
                            },
                            dependencies: {
                                async: "1.5.0",
                                eventemitter3: "1.1.1",
                                "google-protobuf": "3.6.1",
                                hex2dec: "1.0.1",
                                opentracing: "^0.14.4",
                                "source-map-support": "0.3.3",
                                thrift: "0.13.0"
                            },
                            devDependencies: {
                                "babel-cli": "6.14.0",
                                "babel-core": "^6.26.3",
                                "babel-loader": "7",
                                "babel-plugin-add-module-exports": "^1.0.0",
                                "babel-plugin-check-es2015-constants": "6.7.2",
                                "babel-plugin-syntax-object-rest-spread": "^6.13.0",
                                "babel-plugin-transform-es2015-arrow-functions": "6.5.2",
                                "babel-plugin-transform-es2015-block-scoped-functions": "6.6.5",
                                "babel-plugin-transform-es2015-block-scoping": "^6.26.0",
                                "babel-plugin-transform-es2015-classes": "6.6.5",
                                "babel-plugin-transform-es2015-computed-properties": "6.6.5",
                                "babel-plugin-transform-es2015-destructuring": "6.6.5",
                                "babel-plugin-transform-es2015-duplicate-keys": "6.6.4",
                                "babel-plugin-transform-es2015-literals": "6.5.0",
                                "babel-plugin-transform-es2015-modules-commonjs": "6.7.4",
                                "babel-plugin-transform-es2015-object-super": "6.6.5",
                                "babel-plugin-transform-es2015-parameters": "6.7.0",
                                "babel-plugin-transform-es2015-spread": "^6.6.5",
                                "babel-plugin-transform-es2015-sticky-regex": "6.5.0",
                                "babel-plugin-transform-es2015-template-literals": "6.6.5",
                                "babel-plugin-transform-es2015-unicode-regex": "6.5.0",
                                "babel-plugin-transform-object-rest-spread": "^6.26.0",
                                "babel-polyfill": "6.3.14",
                                "babel-preset-es2015": "6.3.13",
                                chai: "3.4.1",
                                clone: "1.0.2",
                                colors: "1.1.2",
                                eslint: "^6.8.0",
                                "eslint-config-airbnb": "^18.0.1",
                                "eslint-plugin-import": "^2.20.0",
                                "eslint-plugin-jsx-a11y": "^6.2.3",
                                "eslint-plugin-react": "^7.18.0",
                                express: "^4.16.3",
                                "fetch-mock": "^9.2.1",
                                istanbul: "^0.4.5",
                                mocha: "^5.2.0",
                                shelljs: "0.5.3",
                                sinon: "^9.0.1",
                                "sprintf-js": "1.0.3",
                                underscore: "1.8.3",
                                "watch-trigger": "0.0.5",
                                webpack: "^4.25.1",
                                "webpack-cli": "^3.1.2"
                            }
                        }
                    }, function(e, t, o) {
                        "use strict";
                        var r = p(o(26)),
                            i = p(o(9)),
                            n = p(o(60)),
                            s = p(o(61)),
                            a = p(o(7)),
                            o = o(1);

                        function p(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        a = {
                            Tracer: r.default,
                            LightStepPropagator: i.default,
                            B3Propagator: n.default,
                            DDPropagator: s.default,
                            SpanContext: a.default
                        };
                        o.Platform.initLibrary(a), e.exports = a
                    }, function(e, t, i) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o, r = arguments[t];
                                    for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                                }
                                return e
                            },
                            o = function(e, t, o) {
                                return t && y(e.prototype, t), o && y(e, o), e
                            },
                            r = b(i(27)),
                            s = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(i(2)),
                            u = b(i(7)),
                            c = b(i(34)),
                            d = b(i(0)),
                            a = i(1),
                            p = b(i(52)),
                            l = b(i(53)),
                            f = b(i(54)),
                            g = b(i(55)),
                            h = b(i(9));

                        function y(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        function b(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }

                        function _(e, t, o) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = o, e
                        }
                        var m = i(56),
                            M = i(57),
                            v = i(4),
                            O = i(8),
                            E = i(58),
                            S = i(24),
                            F = i(22),
                            R = null,
                            o = (function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(T, s.Tracer), o(T, [{
                                key: "_delegateEventEmitterMethods",
                                value: function() {
                                    var t = this;
                                    this._ee = new r.default, (0, d.default)(["addListener", "emit", "eventNames", "getMaxListeners", "listenerCount", "listeners", "on", "once", "prependListener", "prependOnceListener", "removeAllListeners", "removeListener", "setMaxListeners"], function(e) {
                                        t[e] = function() {
                                            t._ee[e] && t._ee[e].apply(t._ee, arguments)
                                        }
                                    })
                                }
                            }, {
                                key: "_makeOptionsTable",
                                value: function() {
                                    this.addOption("verbosity", {
                                        type: "int",
                                        min: 0,
                                        max: 9,
                                        defaultValue: 1
                                    }), this.addOption("access_token", {
                                        type: "string",
                                        defaultValue: ""
                                    }), this.addOption("component_name", {
                                        type: "string",
                                        defaultValue: ""
                                    }), this.addOption("collector_host", {
                                        type: "string",
                                        defaultValue: "collector.lightstep.com"
                                    }), this.addOption("collector_port", {
                                        type: "int",
                                        defaultValue: 443
                                    }), this.addOption("collector_path", {
                                        type: "string",
                                        defaultValue: ""
                                    }), this.addOption("collector_encryption", {
                                        type: "string",
                                        defaultValue: "tls"
                                    }), this.addOption("tags", {
                                        type: "any",
                                        defaultValue: {}
                                    }), this.addOption("max_reporting_interval_millis", {
                                        type: "int",
                                        defaultValue: 2500
                                    }), this.addOption("disable_clock_skew_correction", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), this.addOption("transport", {
                                        type: "string",
                                        defaultValue: "proto"
                                    }), this.addOption("disabled", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), this.addOption("max_span_records", {
                                        type: "int",
                                        defaultValue: 4096
                                    }), this.addOption("default_span_tags", {
                                        type: "any",
                                        defaultValue: {}
                                    }), this.addOption("report_timeout_millis", {
                                        type: "int",
                                        defaultValue: 3e4
                                    }), this.addOption("gzip_json_requests", {
                                        type: "bool",
                                        defaultValue: !0
                                    }), this.addOption("disable_reporting_loop", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), this.addOption("disable_report_on_exit", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), this.addOption("delay_initial_report_millis", {
                                        type: "int",
                                        defaultValue: 1e3
                                    }), this.addOption("error_throttle_millis", {
                                        type: "int",
                                        defaultValue: 6e4
                                    }), this.addOption("logger", {
                                        type: "function",
                                        defaultValue: this._printToConsole.bind(this)
                                    }), this.addOption("clear_span_buffer_consecutive_errors", {
                                        type: "int",
                                        defaultValue: null
                                    }), this.addOption("certificate_verification", {
                                        type: "bool",
                                        defaultValue: !0
                                    }), this.addOption("override_transport", {
                                        type: "any",
                                        defaultValue: null
                                    }), this.addOption("silent", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), this.addOption("log_field_key_hard_limit", {
                                        type: "int",
                                        defaultValue: 256
                                    }), this.addOption("log_field_value_hard_limit", {
                                        type: "int",
                                        defaultValue: 1024
                                    }), this.addOption("disable_meta_event_reporting", {
                                        type: "bool",
                                        defaultValue: !1
                                    })
                                }
                            }, {
                                key: "_startSpan",
                                value: function(e, t) {
                                    var o = this,
                                        r = null;
                                    if ((t = t || {}).references)
                                        for (var i = 0; i < t.references.length; i++) {
                                            var n = t.references[i],
                                                s = n.type();
                                            if (s === this._opentracing.REFERENCE_CHILD_OF || s === this._opentracing.REFERENCE_FOLLOWS_FROM) {
                                                n = n.referencedContext();
                                                if (n) {
                                                    r = n;
                                                    break
                                                }
                                                this._error("Span reference has an invalid context", n)
                                            }
                                        }
                                    var a = r ? r.traceGUID() : this.generateTraceGUIDForRootSpan(),
                                        p = !r || r._sampled,
                                        l = new u.default(this._platform.generateUUID(), a, p),
                                        g = new c.default(this, e, l);
                                    return g.addTags(this._options.default_span_tags), (0, d.default)(t, function(e, t) {
                                        switch (t) {
                                            case "references":
                                                break;
                                            case "startTime":
                                                g.setBeginMicros(Math.floor(1e3 * e));
                                                break;
                                            case "tags":
                                                g.addTags(e);
                                                break;
                                            default:
                                                o._warn("Ignoring unknown field '" + t + "'")
                                        }
                                    }), null !== r && (g.setParentGUID(r._guid), r.forEachBaggageItem(function(e, t) {
                                        return l.setBaggageItem(e, t)
                                    })), this.emit("start_span", g), F.shouldSendMetaSpan(this.options(), g.getTags()) && this.startSpan(O.LS_META_SP_START, {
                                        tags: (_(e = {}, O.LS_META_EVENT_KEY, !0), _(e, O.LS_META_TRACE_KEY, g.traceGUID()), _(e, O.LS_META_SPAN_KEY, g.guid()), e)
                                    }).finish(), g
                                }
                            }, {
                                key: "_inject",
                                value: function(e, t, o) {
                                    var r;
                                    switch (!0 === this.options().meta_event_reporting && this.startSpan(O.LS_META_INJECT, {
                                        tags: (_(r = {}, O.LS_META_EVENT_KEY, !0), _(r, O.LS_META_TRACE_KEY, e._traceGUID), _(r, O.LS_META_SPAN_KEY, e._guid), _(r, O.LS_META_PROPAGATION_KEY, t), r)
                                    }).finish(), t) {
                                        case this._opentracing.FORMAT_HTTP_HEADERS:
                                            this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].inject(e, o);
                                            break;
                                        case this._opentracing.FORMAT_TEXT_MAP:
                                            this._propagators[this._opentracing.FORMAT_TEXT_MAP].inject(e, o);
                                            break;
                                        case this._opentracing.FORMAT_BINARY:
                                            this._propagators[this._opentracing.FORMAT_BINARY].inject(e, o);
                                            break;
                                        default:
                                            this._error("Unknown format: " + t)
                                    }
                                }
                            }, {
                                key: "_extract",
                                value: function(e, t) {
                                    var o, r = null;
                                    switch (e) {
                                        case this._opentracing.FORMAT_HTTP_HEADERS:
                                            r = this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].extract(t);
                                            break;
                                        case this._opentracing.FORMAT_TEXT_MAP:
                                            r = this._propagators[this._opentracing.FORMAT_TEXT_MAP].extract(t);
                                            break;
                                        case this._opentracing.FORMAT_BINARY:
                                            r = this._propagators[this._opentracing.FORMAT_BINARY].extract(t);
                                            break;
                                        default:
                                            return this._error("Unsupported format: " + e), null
                                    }
                                    return !0 === this.options().meta_event_reporting && r && this.startSpan(O.LS_META_EXTRACT, {
                                        tags: (_(o = {}, O.LS_META_EVENT_KEY, !0), _(o, O.LS_META_TRACE_KEY, r._traceGUID), _(o, O.LS_META_SPAN_KEY, r._guid), _(o, O.LS_META_PROPAGATION_KEY, e), o)
                                    }).finish(), r
                                }
                            }, {
                                key: "flush",
                                value: function(e) {
                                    if (e = e || function() {}, this._options.disabled) return this._warn("Manual flush() called in disabled state."), e(null);
                                    this._flushReport(!0, !1, e)
                                }
                            }, {
                                key: "guid",
                                value: function() {
                                    return this._runtimeGUID
                                }
                            }, {
                                key: "verbosity",
                                value: function() {
                                    var e = this._options.verbosity;
                                    return void 0 === e ? 1 : e
                                }
                            }, {
                                key: "generateTraceGUIDForRootSpan",
                                value: function() {
                                    var e = this._platform.generateUUID();
                                    return this._activeRootSpan && (e = this._activeRootSpan.traceGUID()), e
                                }
                            }, {
                                key: "setPlatformOptions",
                                value: function(e) {
                                    var o = this._platform.options(this) || {};
                                    (0, d.default)(e, function(e, t) {
                                        o[t] = e
                                    }), this.options(o)
                                }
                            }, {
                                key: "addOption",
                                value: function(e, t) {
                                    t.name = e, this._optionDescs.push(t), this._options[t.name] = t.defaultValue
                                }
                            }, {
                                key: "options",
                                value: function(t) {
                                    var o = this;
                                    if (0 === arguments.length) return console.assert("object" == _typeof(this._options), "Internal error: _options field incorrect"), this._options;
                                    if ("object" != _typeof(t)) throw new Error("options() must be called with an object: type was " + _typeof(t));
                                    0 === t.collector_port && delete t.collector_port, void 0 !== t.collector_encryption && void 0 === t.collector_port && (t.collector_port = "none" !== t.collector_encryption ? 443 : 80), this.meta_event_reporting = !1;
                                    var r, i, n = {},
                                        s = {};
                                    (0, d.default)(this._optionDescs, function(e) {
                                        o._setOptionInternal(n, s, t, e)
                                    }), Object.keys(t).forEach(function(e) {
                                        void 0 === n[e] && void 0 === s[e] && o._warn("Invalid option " + e + " with value " + t[e])
                                    }), this._initReportingDataIfNeeded(n), this._reportingLoopActive || this._startReportingLoop(), 3 <= this.verbosity() && (r = "", (i = 0, d.default)(n, function(e, t) {
                                        r += "\t" + JSON.stringify(t) + ": " + JSON.stringify(e.newValue) + "\n", i++
                                    }), 0 < i && this._debug("Options modified:\n" + r)), this.emit("options", n, this._options, this)
                                }
                            }, {
                                key: "_setOptionInternal",
                                value: function(e, t, o, r) {
                                    var i = r.name,
                                        n = o[i],
                                        s = _typeof(n);
                                    if (void 0 !== n) {
                                        switch (r.type) {
                                            case "any":
                                                break;
                                            case "bool":
                                                if (!0 !== n && !1 !== n) return void this._error("Invalid boolean option '" + i + "' '" + n + "'");
                                                break;
                                            case "function":
                                                if ("function" != typeof n) return void this._error("Invalid function option '" + i + "' '" + n + "'");
                                                break;
                                            case "int":
                                                if ("number" !== s || Math.floor(n) !== n) return void this._error("Invalid int option '" + i + "' '" + n + "'");
                                                if (void 0 !== r.min && void 0 !== r.max && !(n >= r.min && n <= r.max)) return void this._error("Option '" + i + "' out of range '" + n + "' is not between " + r.min + " and " + r.max);
                                                break;
                                            case "string":
                                                switch (s) {
                                                    case "string":
                                                        break;
                                                    case "number":
                                                        n = v.toString(n);
                                                        break;
                                                    default:
                                                        return void this._error("Invalid string option " + i + " " + n)
                                                }
                                                break;
                                            case "array":
                                                if ("[object Array]" !== Object.prototype.toString.call(n)) return void this._error("Invalid type for array option " + i + ": found '" + s + "'");
                                                break;
                                            default:
                                                return void this._error("Unknown option type '" + r.type + "'")
                                        }
                                        o = this._options[i];
                                        if (void 0 === o) throw new Error("Attempt to set unknown option " + i);
                                        "object" === s || o !== n ? (e[i] = {
                                            oldValue: o,
                                            newValue: n
                                        }, this._options[i] = n) : t[i] = !0
                                    }
                                }
                            }, {
                                key: "_initReportingDataIfNeeded",
                                value: function(e) {
                                    var o = this;
                                    if (null === this._auth) {
                                        this._runtimeGUID = this._platform.runtimeGUID(this._options.component_name), this._auth = new p.default(this._options.access_token);
                                        var r = {};
                                        (0, d.default)(this._options.tags, function(e, t) {
                                            "string" == typeof e ? r[t] = e : o._error("Tracer tag value is not a string: key=" + t)
                                        }), r["lightstep.tracer_version"] = S.version;
                                        var t = this._platform.tracerTags();
                                        (0, d.default)(t, function(e, t) {
                                            r[t] = e
                                        }), this._runtime = new l.default(this._runtimeGUID, this._startMicros, this._options.component_name, r), this._info("Initializing reporting data", {
                                            component_name: this._options.component_name,
                                            access_token: this._auth.getAccessToken()
                                        }), this.emit("reporting_initialized")
                                    } else {
                                        if (!this._runtime) return this._error("Inconsistent state: auth initialized without runtime.");
                                        if (e.access_token) throw new Error("Cannot change access_token after it has been set.");
                                        if (e.component_name) throw new Error("Cannot change component_name after it has been set.");
                                        if (e.collector_host) throw new Error("Cannot change collector_host after the connection is established");
                                        if (e.collector_port) throw new Error("Cannot change collector_port after the connection is established");
                                        if (e.collector_path) throw new Error("Cannot change collector_path after the connection is established");
                                        if (e.collector_encryption) throw new Error("Cannot change collector_encryption after the connection is established")
                                    }
                                }
                            }, {
                                key: "getLogFieldKeyHardLimit",
                                value: function() {
                                    return this._options.log_field_key_hard_limit
                                }
                            }, {
                                key: "getLogFieldValueHardLimit",
                                value: function() {
                                    return this._options.log_field_value_hard_limit
                                }
                            }, {
                                key: "addPlatformPlugins",
                                value: function(e) {
                                    var t = this,
                                        e = this._platform.plugins(e);
                                    (0, d.default)(e, function(e) {
                                        t.addPlugin(e)
                                    })
                                }
                            }, {
                                key: "addPlugin",
                                value: function(e) {
                                    var t = e.name();
                                    this._plugins[t] || (this._plugins[t] = e).addOptions(this)
                                }
                            }, {
                                key: "startPlugins",
                                value: function() {
                                    var o = this;
                                    (0, d.default)(this._plugins, function(e, t) {
                                        o._plugins[t].start(o)
                                    })
                                }
                            }, {
                                key: "addActiveRootSpan",
                                value: function(e) {
                                    this._activeRootSpanSet[e._guid] = e, this._setActiveRootSpanToYoungest()
                                }
                            }, {
                                key: "removeActiveRootSpan",
                                value: function(e) {
                                    delete this._activeRootSpanSet[e._guid], this._setActiveRootSpanToYoungest()
                                }
                            }, {
                                key: "_setActiveRootSpanToYoungest",
                                value: function() {
                                    var t = this;
                                    (this._activeRootSpan = null, d.default)(this._activeRootSpanSet, function(e) {
                                        (!t._activeRootSpan || e._beginMicros > t._activeRootSpan._beginMicros) && (t._activeRootSpan = e)
                                    })
                                }
                            }, {
                                key: "_objectToUint8Array",
                                value: function(e) {
                                    var t = void 0;
                                    try {
                                        t = encodeURIComponent(JSON.stringify(e))
                                    } catch (e) {
                                        return this._error("Could not binary encode carrier data."), null
                                    }
                                    for (var o = new ArrayBuffer(t.length), r = new Uint8Array(o), i = 0; i < t.length; i++) {
                                        var n = t.charCodeAt(i);
                                        if (!(0 <= n && n <= 255)) return this._error("Unexpected character code"), null;
                                        r[i] = n
                                    }
                                    return r
                                }
                            }, {
                                key: "_uint8ArrayToObject",
                                value: function(e) {
                                    if (!e) return this._error("Array is null"), null;
                                    for (var t = "", o = 0; o < e.length; o++) t += String.fromCharCode(e[o]);
                                    try {
                                        return JSON.parse(decodeURIComponent(t))
                                    } catch (e) {
                                        return this._error("Could not decode binary data."), null
                                    }
                                }
                            }, {
                                key: "log",
                                value: function() {
                                    return new M(this)
                                }
                            }, {
                                key: "_clearBuffers",
                                value: function() {
                                    this._spanRecords = [], this._internalLogs = [];
                                    var o = {};
                                    (0, d.default)(this._counters, function(e, t) {
                                        o[t] = 0
                                    }), this._counters = o
                                }
                            }, {
                                key: "_buffersAreEmpty",
                                value: function() {
                                    if (0 < this._spanRecords.length) return !1;
                                    if (0 < this._internalLogs.length) return !1;
                                    var t = !0;
                                    return (0, d.default)(this._counters, function(e) {
                                        0 < e && (t = !1)
                                    }), t
                                }
                            }, {
                                key: "_addSpanRecord",
                                value: function(e) {
                                    this._internalAddSpanRecord(e), this.emit("span_added", e)
                                }
                            }, {
                                key: "_internalAddSpanRecord",
                                value: function(e) {
                                    var t;
                                    e ? this._spanRecords.length >= this._options.max_span_records ? (t = Math.floor(this._spanRecords.length * Math.random()), this._spanRecords[t] = e, this._counters["spans.dropped"]++) : this._spanRecords.push(e) : this._error("Attempt to add null record to buffer")
                                }
                            }, {
                                key: "_restoreRecords",
                                value: function(e, t, o) {
                                    var r = this;
                                    (0, d.default)(e, function(e) {
                                        r._internalAddSpanRecord(e)
                                    });
                                    e = this._internalLogs;
                                    this._internalLogs = [];
                                    e = t.concat(e);
                                    (0, d.default)(e, function(e) {
                                        r._pushInternalLog(e)
                                    }), (0, d.default)(o, function(e, t) {
                                        t in r._counters ? r._counters[t] += e : r._error("Bad counter name: " + t)
                                    })
                                }
                            }, {
                                key: "_clearSpanRecordsIfMaxErrors",
                                value: function() {
                                    var e, t = this.options().clear_span_buffer_consecutive_errors;
                                    null === t || this._reportErrorStreak < t || (e = this._spanRecords.length, this._counters["spans.dropped"] += e, this._spanRecords = [], this._warn("Span buffer flushed, max consecutive errors reached", {
                                        max_consecutive_errors: t,
                                        spans_dropped: e
                                    }))
                                }
                            }, {
                                key: "_setupReportOnExit",
                                value: function() {
                                    var e, t = this;
                                    this._options.disable_report_on_exit ? this._debug("report-on-exit is disabled.") : (e = 0, this._platform.onBeforeExit(function() {
                                        0 < e++ || (t._info("Final flush before exit."), t._flushReport(!1, !0, function(e) {
                                            e && t._warn("Final report before exit failed", {
                                                error: e,
                                                unflushed_spans: t._spanRecords.length,
                                                buffer_youngest_micros: t._reportYoungestMicros
                                            })
                                        }))
                                    }))
                                }
                            }, {
                                key: "_startReportingLoop",
                                value: function() {
                                    var e, t, o, r = this;
                                    this._options.disabled ? this._info("Not starting reporting loop: instrumentation is disabled.") : this._options.disable_reporting_loop ? this._info("Not starting reporting loop: reporting loop is disabled.") : null !== this._auth && (this._reportingLoopActive ? this._info("Reporting loop already started!") : (this._info("Starting reporting loop:", this._runtime), this._reportingLoopActive = !0, e = 0, this._platform.onBeforeExit(function() {
                                        0 < e++ || r._stopReportingLoop()
                                    }), t = function t() {
                                        r._enqueueNextReport(function(e) {
                                            r._reportingLoopActive && t()
                                        })
                                    }, o = Math.floor(Math.random() * this._options.delay_initial_report_millis), F.detachedTimeout(function() {
                                        t()
                                    }, o)))
                                }
                            }, {
                                key: "_stopReportingLoop",
                                value: function() {
                                    this._debug("Stopping reporting loop"), this._reportingLoopActive = !1, clearTimeout(this._reportTimer), this._reportTimer = null
                                }
                            }, {
                                key: "_enqueueNextReport",
                                value: function(e) {
                                    var t, o, r = this;
                                    this._reportTimer || (t = this._options.max_reporting_interval_millis, 0 === this._reportErrorStreak && this._useClockState && !this._clockState.isReady() && (t = Math.min(O.CLOCK_STATE_REFRESH_INTERVAL_MS, t)), o = (1 + Math.min(7, Math.max(0, this._reportErrorStreak))) * t, t = .5 * Math.random() - .25 + 1, o = Math.floor(Math.max(0, t * o)), this._debug("Delaying next flush for " + o + "ms"), this._reportTimer = F.detachedTimeout(function() {
                                        r._reportTimer = null, r._flushReport(!1, !1, e)
                                    }, o))
                                }
                            }, {
                                key: "_flushReport",
                                value: function(e, n, s) {
                                    var a = this;
                                    s = s || function(e) {};
                                    var t = this._clockState.isReady(),
                                        o = this._clockState.offsetMicros();
                                    this._debug("time correction state", {
                                        offset_micros: o,
                                        active_samples: this._clockState.activeSampleCount(),
                                        ready: t
                                    });
                                    var r = this._spanRecords,
                                        i = this._counters,
                                        p = this._internalLogs;
                                    if (!this._useClockState || e || t || n) {
                                        if (this._buffersAreEmpty()) return this._debug("Skipping empty report"), s(null);
                                        this._clearBuffers(), this._debug("Flushing report (" + r.length + " spans)")
                                    } else this._debug("Flushing empty report to prime clock state"), r = [], i = {}, p = [];
                                    this._transport.ensureConnection(this._options), console.assert(null !== this._runtimeGUID, "No runtime GUID for Tracer");
                                    var o = this._useClockState ? o : 0,
                                        l = this._platform.nowMicros(),
                                        g = new f.default(this._runtime, this._reportYoungestMicros, l, r, p, i, o);
                                    this.emit("prereport", g);
                                    var u = this._platform.nowMicros();
                                    this._options.meta_event_reporting && !this._first_report_has_run && (this._first_report_has_run = !0, this.startSpan(O.LS_META_TRACER_CREATE, {
                                        tags: (_(o = {}, O.LS_META_EVENT_KEY, !0), _(o, O.LS_META_TRACER_GUID_KEY, this._runtimeGUID), o)
                                    }).finish()), this._transport.report(n, this._auth, g, function(e, t) {
                                        var o, r = a._platform.nowMicros(),
                                            i = (l - g.oldest_micros) / 1e6;
                                        return e ? (a._reportErrorStreak++, o = void 0, o = e.message ? "" + e.message : "" + e, a._warn("Error in report: " + o, {
                                            last_report_seconds_ago: i
                                        }), a._restoreRecords(g.getSpanRecords(), g.getInternalLogs(), g.getCounters()), a._counters["reports.errors.send"]++, a._clearSpanRecordsIfMaxErrors(), a.emit("report_error", e, {
                                            error: e,
                                            streak: a._reportErrorStreak,
                                            detached: n
                                        })) : (4 <= a.verbosity() && a._debug("Report flushed for last " + i + " seconds", {
                                            spans_reported: g.getSpanRecords().length
                                        }), a._reportErrorStreak = 0, a._reportYoungestMicros = l, t ? (t.timing && t.timing.receive_micros && t.timing.transmit_micros ? a._clockState.addSample(u, t.timing.receive_micros, t.timing.transmit_micros, r) : t.receiveTimestamp && t.transmitTimestamp ? a._clockState.addSample(u, 1e6 * t.receiveTimestamp.seconds + t.receiveTimestamp.nanos / 1e3, 1e6 * t.transmitTimestamp.seconds + t.transmitTimestamp.nanos / 1e3, r) : a._useClockState = !1, t.errors && 0 < t.errors.length ? a._warn("Errors in report", t.errors) : t.errorsList && 0 < t.errorsList.length && a._warn("Errors in report", t.errorsList), t.commandsList && 0 < t.commandsList.length && t.commandsList[0].devMode && !0 !== a.options().disable_meta_event_reporting && (a.options().meta_event_reporting = !0)) : a._useClockState = !1, a.emit("report", g, t)), s(e)
                                    })
                                }
                            }, {
                                key: "stats",
                                value: function() {
                                    return {
                                        counters: this._counters
                                    }
                                }
                            }, {
                                key: "_debug",
                                value: function(e, t) {
                                    this.verbosity() < 4 || this._options.logger("debug", e, t)
                                }
                            }, {
                                key: "_info",
                                value: function(e, t) {
                                    this.verbosity() < 3 || this._options.logger("info", e, t)
                                }
                            }, {
                                key: "_warn",
                                value: function(e, t) {
                                    this._counters["internal.warnings"]++, this.verbosity() < 3 || this._options.logger("warn", e, t)
                                }
                            }, {
                                key: "_error",
                                value: function(e, t) {
                                    this._counters["internal.errors"]++;
                                    var o = this.log().level(O.LOG_ERROR).message(e).payload(t).record();
                                    this._pushInternalLog(o);
                                    var r = this.verbosity();
                                    if (0 !== r) {
                                        o = Date.now();
                                        if (1 === r) {
                                            if (o < this._lastVisibleErrorMillis + this._options.error_throttle_millis) return void this._skippedVisibleErrors++;
                                            0 < this._skippedVisibleErrors && (r = this._skippedVisibleErrors + " errors masked since last logged error. Increase 'verbosity' option to see all errors.", this._options.logger("error", r, t))
                                        }
                                        this._options.logger("error", e, t), this._lastVisibleErrorMillis = o, this._skippedVisibleErrors = 0
                                    }
                                }
                            }, {
                                key: "_printToConsole",
                                value: function(e, t, o) {
                                    var r = "log",
                                        i = "[LightStep:INFO] " + t;
                                    "debug" === e ? (r = "log", i = "[LightStep:DEBUG] " + t) : "info" === e ? (r = "log", i = "[LightStep:INFO] " + t) : "warn" === e ? (r = "warn", i = "[LightStep:WARN] " + t) : "error" === e && (r = "error", i = "[LightStep:ERROR] " + t), this._options.silent || (void 0 !== o ? console[r](i, o) : console[r](i))
                                }
                            }, {
                                key: "_pushInternalLog",
                                value: function(e) {
                                    e && (20 <= this._internalLogs.length ? (e.message = "MAX_INTERNAL_LOGS limit hit. Last error: " + e.message, this._internalLogs[this._internalLogs.length - 1] = e) : this._internalLogs.push(e))
                                }
                            }]), T);

                        function T(e) {
                            ! function(e) {
                                if (!(e instanceof T)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            var o = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != _typeof(t) && "function" != typeof t ? e : t
                            }(this, Object.getPrototypeOf(T).call(this));
                            o._delegateEventEmitterMethods(), e = e || {}, R || (E.setOptions(e), R = o), o._platform = new a.Platform(o), o._runtimeGUID = e.guid || o.override_runtime_guid || null, o._plugins = {}, o._options = {}, o._optionDescs = [], o._makeOptionsTable(), o._opentracing = s, e.opentracing_module && (o._opentracing = e.opentracing_module);
                            var t = o._platform.nowMicros();
                            o._startMicros = t, o._auth = null, o._runtime = null;
                            var r = {
                                warn: function(e, t) {
                                    o._warn(e, t)
                                },
                                error: function(e, t) {
                                    o._error(e, t)
                                }
                            };
                            if (e && (o._transport = e.override_transport), o._propagators = {}, o._propagators[o._opentracing.FORMAT_HTTP_HEADERS] = new h.default(o), o._propagators[o._opentracing.FORMAT_TEXT_MAP] = new h.default(o), o._propagators[o._opentracing.FORMAT_BINARY] = new g.default(o, o._opentracing.FORMAT_BINARY), e && e.propagators && (o._propagators = n({}, o._propagators, e.propagators)), o._reportingLoopActive = !1, o._first_report_has_run = !1, o._reportYoungestMicros = t, o._reportTimer = null, o._reportErrorStreak = 0, o._lastVisibleErrorMillis = 0, o._skippedVisibleErrors = 0, o._activeRootSpanSet = {}, o._activeRootSpan = null, o._spanRecords = [], o._counters = {
                                    "internal.errors": 0,
                                    "internal.warnings": 0,
                                    "spans.dropped": 0,
                                    "logs.dropped": 0,
                                    "logs.keys.over_limit": 0,
                                    "logs.values.over_limit": 0,
                                    "reports.errors.send": 0
                                }, o._internalLogs = [], o._flushIsActive = !1, o.addPlugin(i(59)), o.addPlatformPlugins(e), o.setPlatformOptions(e), e && o.options(e), void 0 === o._transport || null === o._transport) switch (o._options.transport) {
                                case "proto":
                                    o._transport = new a.ProtoTransport(r), o._info("Using protobuf over HTTP transport per user-defined option.");
                                    break;
                                case "thrift":
                                    o._transport = new a.ThriftTransport(r), o._info("Using thrift transport per user-defined option.");
                                    break;
                                default:
                                    o._transport = new a.ProtoTransport(r), o._info("Using protobuf over HTTP transport as no user-defined option was supplied.")
                            }
                            return o._useClockState = !o._options.disable_clock_skew_correction, o._clockState = new m({
                                nowMicros: function() {
                                    return o._platform.nowMicros()
                                },
                                localStoreGet: function() {
                                    var e = "clock_state/" + o._options.collector_host;
                                    return o._platform.localStoreGet(e)
                                },
                                localStoreSet: function(e) {
                                    var t = "clock_state/" + o._options.collector_host;
                                    return o._platform.localStoreSet(t, e)
                                }
                            }), o._setupReportOnExit(), o._info("Tracer created with guid " + o._runtimeGUID), 0 === o._options.access_token.length && o._warn("Access token not set -\n            this requires a satellite with access token checking disabled,\n            such as a developer satellite."), o.startPlugins(), o
                        }
                        t.default = o, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        var d = "function" != typeof Object.create && "~";

                        function r(e, t, o) {
                            this.fn = e, this.context = t, this.once = o || !1
                        }

                        function i() {}
                        i.prototype._events = void 0, i.prototype.listeners = function(e, t) {
                            var e = d ? d + e : e,
                                o = this._events && this._events[e];
                            if (t) return !!o;
                            if (!o) return [];
                            if (o.fn) return [o.fn];
                            for (var r = 0, i = o.length, n = new Array(i); r < i; r++) n[r] = o[r].fn;
                            return n
                        }, i.prototype.emit = function(e, t, o, r, i, n) {
                            var s = d ? d + e : e;
                            if (!this._events || !this._events[s]) return !1;
                            var a, p = this._events[s],
                                l = arguments.length;
                            if ("function" == typeof p.fn) {
                                switch (p.once && this.removeListener(e, p.fn, void 0, !0), l) {
                                    case 1:
                                        return p.fn.call(p.context), !0;
                                    case 2:
                                        return p.fn.call(p.context, t), !0;
                                    case 3:
                                        return p.fn.call(p.context, t, o), !0;
                                    case 4:
                                        return p.fn.call(p.context, t, o, r), !0;
                                    case 5:
                                        return p.fn.call(p.context, t, o, r, i), !0;
                                    case 6:
                                        return p.fn.call(p.context, t, o, r, i, n), !0
                                }
                                for (c = 1, a = new Array(l - 1); c < l; c++) a[c - 1] = arguments[c];
                                p.fn.apply(p.context, a)
                            } else
                                for (var g, u = p.length, c = 0; c < u; c++) switch (p[c].once && this.removeListener(e, p[c].fn, void 0, !0), l) {
                                    case 1:
                                        p[c].fn.call(p[c].context);
                                        break;
                                    case 2:
                                        p[c].fn.call(p[c].context, t);
                                        break;
                                    case 3:
                                        p[c].fn.call(p[c].context, t, o);
                                        break;
                                    default:
                                        if (!a)
                                            for (g = 1, a = new Array(l - 1); g < l; g++) a[g - 1] = arguments[g];
                                        p[c].fn.apply(p[c].context, a)
                                }
                            return !0
                        }, i.prototype.on = function(e, t, o) {
                            o = new r(t, o || this), e = d ? d + e : e;
                            return this._events || (this._events = d ? {} : Object.create(null)), this._events[e] ? this._events[e].fn ? this._events[e] = [this._events[e], o] : this._events[e].push(o) : this._events[e] = o, this
                        }, i.prototype.once = function(e, t, o) {
                            o = new r(t, o || this, !0), e = d ? d + e : e;
                            return this._events || (this._events = d ? {} : Object.create(null)), this._events[e] ? this._events[e].fn ? this._events[e] = [this._events[e], o] : this._events[e].push(o) : this._events[e] = o, this
                        }, i.prototype.removeListener = function(e, t, o, r) {
                            e = d ? d + e : e;
                            if (!this._events || !this._events[e]) return this;
                            var i = this._events[e],
                                n = [];
                            if (t)
                                if (i.fn)(i.fn !== t || r && !i.once || o && i.context !== o) && n.push(i);
                                else
                                    for (var s = 0, a = i.length; s < a; s++)(i[s].fn !== t || r && !i[s].once || o && i[s].context !== o) && n.push(i[s]);
                            return n.length ? this._events[e] = 1 === n.length ? n[0] : n : delete this._events[e], this
                        }, i.prototype.removeAllListeners = function(e) {
                            return this._events && (e ? delete this._events[d ? d + e : e] : this._events = d ? {} : Object.create(null)), this
                        }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
                            return this
                        }, i.prefixed = d, e.exports = i
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });

                        function r(e) {
                            this.buffer = e
                        }
                        t.default = r
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.SPAN_KIND = "span.kind", t.SPAN_KIND_RPC_CLIENT = "client", t.SPAN_KIND_RPC_SERVER = "server", t.SPAN_KIND_MESSAGING_PRODUCER = "producer", t.SPAN_KIND_MESSAGING_CONSUMER = "consumer", t.ERROR = "error", t.COMPONENT = "component", t.SAMPLING_PRIORITY = "sampling.priority", t.PEER_SERVICE = "peer.service", t.PEER_HOSTNAME = "peer.hostname", t.PEER_ADDRESS = "peer.address", t.PEER_HOST_IPV4 = "peer.ipv4", t.PEER_HOST_IPV6 = "peer.ipv6", t.PEER_PORT = "peer.port", t.HTTP_URL = "http.url", t.HTTP_METHOD = "http.method", t.HTTP_STATUS_CODE = "http.status_code", t.MESSAGE_BUS_DESTINATION = "message_bus.destination", t.DB_INSTANCE = "db.instance", t.DB_STATEMENT = "db.statement", t.DB_TYPE = "db.type", t.DB_USER = "db.user"
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = o(17);
                        t.MockContext = r.default;
                        r = o(18);
                        t.MockSpan = r.default;
                        o = o(31);
                        t.MockTracer = o.default
                    }, function(e, t, o) {
                        "use strict";
                        var r, i = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                                })(e, t)
                        }, function(e, t) {
                            function o() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, s = o(2),
                            a = o(32),
                            p = o(18),
                            i = (n = s.Tracer, i(l, n), l.prototype._startSpan = function(e, t) {
                                var o = this._allocSpan();
                                if (o.setOperationName(e), this._spans.push(o), t.references)
                                    for (var r = 0, i = t.references; r < i.length; r++) {
                                        var n = i[r];
                                        o.addReference(n)
                                    }
                                return o._startStack = (new Error).stack, o
                            }, l.prototype._inject = function(e, t, o) {
                                throw new Error("NOT YET IMPLEMENTED")
                            }, l.prototype._extract = function(e, t) {
                                throw new Error("NOT YET IMPLEMENTED")
                            }, l.prototype._allocSpan = function() {
                                return new p.default(this)
                            }, l.prototype.clear = function() {
                                this._spans = []
                            }, l.prototype.report = function() {
                                return new a.default(this._spans)
                            }, l);

                        function l() {
                            var e = n.call(this) || this;
                            return e._spans = [], e
                        }
                        t.MockTracer = i, t.default = i
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = (i.prototype.firstSpanWithTagValue = function(e, t) {
                            e = this.spansByTag[e];
                            if (!e) return null;
                            t = e[t];
                            return t ? t[0] : null
                        }, i);

                        function i(e) {
                            var i = this;
                            this.spans = e, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], e.forEach(function(o) {
                                0 === o._finishMs && i.unfinishedSpans.push(o), i.spansByUUID[o.uuid()] = o, i.debugSpans.push(o.debug());
                                var r = o.tags();
                                Object.keys(r).forEach(function(e) {
                                    var t = r[e];
                                    i.spansByTag[e] = i.spansByTag[e] || {}, i.spansByTag[e][t] = i.spansByTag[e][t] || [], i.spansByTag[e][t].push(o)
                                })
                            })
                        }
                        t.MockReport = r, t.default = r
                    }, function(e, t, o) {
                        "use strict";
                        var r, i = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                                })(e, t)
                        }, function(e, t) {
                            function o() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, o = o(11),
                            s = new o.default,
                            a = null,
                            p = (n = o.default, i(l, n), l.prototype.startSpan = function() {
                                var e = a || s;
                                return e.startSpan.apply(e, arguments)
                            }, l.prototype.inject = function() {
                                var e = a || s;
                                return e.inject.apply(e, arguments)
                            }, l.prototype.extract = function() {
                                var e = a || s;
                                return e.extract.apply(e, arguments)
                            }, new l);

                        function l() {
                            return null !== n && n.apply(this, arguments) || this
                        }
                        t.initGlobalTracer = function(e) {
                            a = e
                        }, t.globalTracer = function() {
                            return p
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && u(e.prototype, t), o && u(e, o), e
                            },
                            i = d(o(2)),
                            p = d(o(4)),
                            n = d(o(8)),
                            l = c(o(0)),
                            s = o(1),
                            a = c(o(51)),
                            g = c(o(22));

                        function u(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        function c(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }

                        function d(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t.default = e, t
                        }

                        function f(e, t, o) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = o, e
                        }
                        var h = o(23),
                            y = o(12),
                            b = o(3),
                            r = (function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(_, i.Span), r(_, [{
                                key: "_tracer",
                                value: function() {
                                    return this._tracerImp
                                }
                            }, {
                                key: "_context",
                                value: function() {
                                    return this._ctx
                                }
                            }, {
                                key: "_setOperationName",
                                value: function(e) {
                                    this._operationName = "" + e
                                }
                            }, {
                                key: "_setBaggageItem",
                                value: function(e, t) {
                                    this._ctx.setBaggageItem(e, t)
                                }
                            }, {
                                key: "_getBaggageItem",
                                value: function(e) {
                                    return this._ctx.getBaggageItem(e)
                                }
                            }, {
                                key: "_addTags",
                                value: function(e) {
                                    var o = this;
                                    (0, l.default)(e, function(e, t) {
                                        o._tags[t] = e
                                    })
                                }
                            }, {
                                key: "_log",
                                value: function(e, t) {
                                    "object" === _typeof(e) ? (t = t ? 1e3 * t : this._tracerImp._platform.nowMicros(), e = new a.default(this._tracerImp.getLogFieldKeyHardLimit(), this._tracerImp.getLogFieldValueHardLimit(), t, e), this._log_records = this._log_records || [], this._log_records.push(e), this._tracerImp.emit("log_added", e)) : this._tracerImp._error("Span.log() expects an object as its first argument")
                                }
                            }, {
                                key: "_finish",
                                value: function(e) {
                                    return this.end(e)
                                }
                            }]), r(_, [{
                                key: "getOperationName",
                                value: function() {
                                    return this._operationName
                                }
                            }, {
                                key: "guid",
                                value: function() {
                                    return this._ctx._guid
                                }
                            }, {
                                key: "traceGUID",
                                value: function() {
                                    return this._ctx._traceGUID
                                }
                            }, {
                                key: "parentGUID",
                                value: function() {
                                    return this._tags.parent_span_guid
                                }
                            }, {
                                key: "setParentGUID",
                                value: function(e) {
                                    return this._tags.parent_span_guid = p.toString(e), this
                                }
                            }, {
                                key: "beginMicros",
                                value: function() {
                                    return this._beginMicros
                                }
                            }, {
                                key: "setBeginMicros",
                                value: function(e) {
                                    return this._beginMicros = e, this
                                }
                            }, {
                                key: "endMicros",
                                value: function() {
                                    return this._endMicros
                                }
                            }, {
                                key: "setEndMicros",
                                value: function(e) {
                                    return this._endMicros = e, this
                                }
                            }, {
                                key: "generateTraceURL",
                                value: function() {
                                    var e = 0 < this._beginMicros && 0 < this._endMicros ? Math.floor((this._beginMicros + this._endMicros) / 2) : this._tracerImp._platform.nowMicros();
                                    return n.LIGHTSTEP_APP_URL_PREFIX + "/" + encodeURIComponent(this._tracerImp.options().access_token) + "/trace?span_guid=" + encodeURIComponent(this.guid()) + "&at_micros=" + e
                                }
                            }, {
                                key: "getTags",
                                value: function() {
                                    return this._tags
                                }
                            }, {
                                key: "end",
                                value: function(e) {
                                    this._ended || (this._ended = !0, void 0 !== e && this.setEndMicros(Math.floor(1e3 * e)), 0 === this._endMicros && this.setEndMicros(this._tracerImp._platform.nowMicros()), g.default.shouldSendMetaSpan(this._tracer().options(), this.getTags()) && this._tracerImp.startSpan(n.LS_META_SP_FINISH, {
                                        tags: (f(e = {}, n.LS_META_EVENT_KEY, !0), f(e, n.LS_META_TRACE_KEY, this.traceGUID()), f(e, n.LS_META_SPAN_KEY, this.guid()), e)
                                    }).finish(), this._tracerImp._addSpanRecord(this))
                                }
                            }, {
                                key: "_toThrift",
                                value: function() {
                                    var o = this,
                                        r = [];
                                    (0, l.default)(this._tags, function(e, t) {
                                        r.push(new s.crouton_thrift.KeyValue({
                                            Key: p.toString(t),
                                            Value: p.toString(e)
                                        }))
                                    });
                                    var i = [];
                                    return (0, l.default)(this._log_records, function(e) {
                                        var t = e.toThrift();
                                        o._tracerImp._counters["logs.keys.over_limit"] += e.getNumKeysOverLimit(), o._tracerImp._counters["logs.values.over_limit"] += e.getNumValuesOverLimit(), i.push(t)
                                    }), new s.crouton_thrift.SpanRecord({
                                        span_guid: this.guid(),
                                        trace_guid: this.traceGUID(),
                                        runtime_guid: this._tracerImp.guid(),
                                        span_name: this._operationName,
                                        oldest_micros: this._beginMicros,
                                        youngest_micros: this._endMicros,
                                        attributes: r,
                                        error_flag: this._errorFlag,
                                        log_records: i
                                    })
                                }
                            }, {
                                key: "_toProto",
                                value: function() {
                                    var o = this,
                                        e = new b.SpanContext;
                                    e.setTraceId(h.hexToDec(this.traceGUID())), e.setSpanId(h.hexToDec(this.guid()));
                                    var t = new b.Span;
                                    t.setSpanContext(e), t.setOperationName(this._operationName);
                                    var r = new y.Timestamp,
                                        i = Math.floor(this._beginMicros / 1e6),
                                        e = this._beginMicros % 1e6 * 1e3;
                                    r.setSeconds(i), r.setNanos(e), t.setStartTimestamp(r), t.setDurationMicros((this._endMicros - this._beginMicros).toString());
                                    var n = [];
                                    (0, l.default)(this._log_records, function(e) {
                                        var t = e.toProto();
                                        o._tracerImp._counters["logs.keys.over_limit"] += e.getNumKeysOverLimit(), o._tracerImp._counters["logs.values.over_limit"] += e.getNumValuesOverLimit(), n.push(t)
                                    }), t.setLogsList(n);
                                    var s = void 0,
                                        a = [];
                                    return (0, l.default)(this._tags, function(e, t) {
                                        var o = p.toString(e),
                                            e = p.toString(t),
                                            t = new b.KeyValue;
                                        "parent_span_guid" === e && (s = o), t.setKey(e), t.setStringValue(o), a.push(t)
                                    }), t.setTagsList(a), void 0 !== s && ((e = new b.Reference).setRelationship(b.Reference.Relationship.CHILD_OF), (r = new b.SpanContext).setSpanId(h.hexToDec(s)), e.setSpanContext(r), t.setReferencesList([e])), t
                                }
                            }]), _);

                        function _(e, t, o) {
                            ! function(e) {
                                if (!(e instanceof _)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            var r = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != _typeof(t) && "function" != typeof t ? e : t
                            }(this, Object.getPrototypeOf(_).call(this));
                            return console.assert("object" == _typeof(e), "Invalid runtime"), r._tracerImp = e, r._ctx = o, r._ended = !1, r._operationName = t, r._tags = {}, r._beginMicros = e._platform.nowMicros(), r._endMicros = 0, r._errorFlag = !1, r._log_records = null, r
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                            return t && i(e.prototype, t), o && i(e, o), e
                        };

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var n = o(36),
                            s = o(19),
                            a = function() {
                                if (window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart) {
                                    var e = performance.timing.navigationStart;
                                    return function() {
                                        return Math.floor(1e3 * (e + performance.now()))
                                    }
                                }
                                return function() {
                                    return 1e3 * Date.now()
                                }
                            }(),
                            r = (r(p, [{
                                key: "name",
                                value: function() {
                                    return "browser"
                                }
                            }, {
                                key: "nowMicros",
                                value: function() {
                                    return a()
                                }
                            }, {
                                key: "runtimeGUID",
                                value: function(e) {
                                    var t = encodeURIComponent("lightstep_guid/" + e),
                                        e = s.cookie(t) || this._generateLongUUID();
                                    s.cookie(t, e, 604800, "/");
                                    t = s.cookie("lightstep_session_id") || this._generateLongUUID();
                                    return s.cookie("lightstep_session_id", t, 604800, "/"), e
                                }
                            }, {
                                key: "generateUUID",
                                value: function() {
                                    return this._generateLongUUID()
                                }
                            }, {
                                key: "_generateLongUUID",
                                value: function() {
                                    return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                                }
                            }, {
                                key: "onBeforeExit",
                                value: function() {
                                    if (s.isBrowser()) {
                                        for (var e, t = arguments.length, o = Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                                        (e = window).addEventListener.apply(e, ["beforeunload"].concat(o))
                                    }
                                }
                            }, {
                                key: "plugins",
                                value: function() {
                                    return [o(37), o(38), o(39)]
                                }
                            }, {
                                key: "options",
                                value: function() {
                                    var e = {},
                                        t = {};
                                    return n.parseScriptElementOptions(e, t), n.parseURLQueryOptions(e, t), e
                                }
                            }, {
                                key: "tracerTags",
                                value: function() {
                                    return {
                                        "lightstep.tracer_platform": "browser"
                                    }
                                }
                            }, {
                                key: "fatal",
                                value: function(e) {
                                    throw new Error(e)
                                }
                            }, {
                                key: "localStoreGet",
                                value: function(e) {
                                    try {
                                        if (!window.sessionStorage) return null
                                    } catch (e) {
                                        return null
                                    }
                                    try {
                                        return JSON.parse(sessionStorage.getItem("lightstep/" + e))
                                    } catch (e) {
                                        return null
                                    }
                                }
                            }, {
                                key: "localStoreSet",
                                value: function(e, t) {
                                    try {
                                        if (!window.sessionStorage) return
                                    } catch (e) {
                                        return
                                    }
                                    try {
                                        sessionStorage.setItem("lightstep/" + e, JSON.stringify(t))
                                    } catch (e) {}
                                }
                            }], [{
                                key: "initLibrary",
                                value: function(e) {
                                    var t = {},
                                        o = {};
                                    n.parseScriptElementOptions(t, o), o.init_global_tracer && p.initGlobalTracer(e, t)
                                }
                            }, {
                                key: "initGlobalTracer",
                                value: function(e, t) {
                                    "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && "object" == _typeof(window.opentracing) && opentracing.initGlobalTracer(new e.Tracer(t))
                                }
                            }]), p);

                        function p() {
                            ! function(e) {
                                if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
                            }(this)
                        }
                        e.exports = r
                    }, function(e, t, o) {
                        "use strict";
                        var r = o(19),
                            i = function() {
                                if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) return null;
                                if (!r.isBrowser()) return null;
                                var e = document.getElementsByTagName("SCRIPT");
                                return 0 < e.length ? e[e.length - 1] : null
                            }();
                        e.exports = {
                            parseScriptElementOptions: r.isBrowser() ? function(e, t) {
                                var o, r;
                                i && ("string" == typeof(r = (o = i.dataset).access_token) && 0 < r.length && (e.access_token = r), "string" == typeof(r = o.component_name) && 0 < r.length && (e.component_name = r), "string" == typeof(r = o.collector_host) && 0 < r.length && (e.collector_host = r), (r = o.collector_port) && (e.collector_port = parseInt(r, 10)), "string" == typeof(r = o.collector_path) && 0 < r.length && (e.collector_path = r), (r = o.collector_encryption) && (e.collector_encryption = r), "string" == typeof(r = o.enable) && ("true" === r ? e.enable = !0 : "false" === r && (e.enable = !1)), "string" == typeof(r = o.verbosity) && (e.verbosity = parseInt(r, 10)), "string" == typeof(r = o.init_global_tracer) && ("true" === r ? t.init_global_tracer = !0 : "false" === r && (t.init_global_tracer = !1)), "string" == typeof o.xhr_instrumentation && "true" === o.xhr_instrumentation && (e.xhr_instrumentation = !0), "string" == typeof o.instrument_page_load && "true" === o.instrument_page_load && (e.instrument_page_load = !0))
                            } : function(e, t) {},
                            parseURLQueryOptions: r.isBrowser() ? function(e) {
                                var t = function() {
                                    var e = {},
                                        t = window.location.href.indexOf("?");
                                    if (t < 0) return e;
                                    t = window.location.href.slice(t + 1);
                                    0 <= t.indexOf("#") && (t = t.slice(0, t.indexOf("#")));
                                    for (var o = t.replace(/\+/, "%20").split("&"), r = 0; r < o.length; r++) {
                                        var i = o[r].split("=");
                                        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                                    }
                                    return e
                                }();
                                if (t.lightstep_verbosity) try {
                                    e.verbosity = parseInt(t.lightstep_verbosity, 10)
                                } catch (e) {}
                                t.lightstep_log_to_console && (e.log_to_console = !0)
                            } : function(e) {
                                return {}
                            }
                        }
                    }, function(e, t, o) {
                        "use strict";
                        var u = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o, r = arguments[t];
                                    for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                                }
                                return e
                            },
                            r = function(e, t, o) {
                                return t && i(e.prototype, t), o && i(e, o), e
                            },
                            a = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(o(2));

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var c = {};

                        function d(e) {
                            for (var t = e.getAllResponseHeaders().replace(/\s+$/, "").split(/\n/), o = 0; o < t.length; o++) t[o] = t[o].replace(/\r/g, "").replace(/^\s+/, "").replace(/\s+$/, "");
                            return t
                        }
                        "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && void 0 !== window.XMLHttpRequest && (c = {
                            XMLHttpRequest: XMLHttpRequest,
                            open: XMLHttpRequest.prototype.open,
                            send: XMLHttpRequest.prototype.send,
                            setRequestHeader: XMLHttpRequest.prototype.setRequestHeader
                        });
                        r(n, [{
                            key: "name",
                            value: function() {
                                return "instrument_xhr"
                            }
                        }, {
                            key: "addOptions",
                            value: function(e) {
                                e.addOption("xhr_instrumentation", {
                                    type: "bool",
                                    defaultValue: !1
                                }), e.addOption("xhr_url_inclusion_patterns", {
                                    type: "array",
                                    defaultValue: [/.*/]
                                }), e.addOption("xhr_url_exclusion_patterns", {
                                    type: "array",
                                    defaultValue: []
                                }), e.addOption("xhr_url_header_inclusion_patterns", {
                                    type: "array",
                                    defaultValue: [/.*/]
                                }), e.addOption("xhr_url_header_exclusion_patterns", {
                                    type: "array",
                                    defaultValue: []
                                }), e.addOption("include_cookies", {
                                    type: "bool",
                                    defaultValue: !0
                                })
                            }
                        }, {
                            key: "start",
                            value: function(e) {
                                var t;
                                this._enabled && (t = (this._tracer = e).options(), this._addServiceHostToExclusions(t), this._handleOptions({}, t), e.on("options", this._handleOptions))
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                var e;
                                this._enabled && ((e = c.XMLHttpRequest.prototype).open = c.open, e.send = c.send)
                            }
                        }, {
                            key: "_handleOptions",
                            value: function(e, t) {
                                e.collector_host && this._addServiceHostToExclusions(t), !this._proxyInited && t.xhr_instrumentation && (this._proxyInited = !0, (t = c.XMLHttpRequest.prototype).setRequestHeader = this._instrumentSetRequestHeader(), t.open = this._instrumentOpen(), t.send = this._instrumentSend())
                            }
                        }, {
                            key: "_addServiceHostToExclusions",
                            value: function(e) {
                                var t, o;

                                function r(e) {
                                    return ("" + e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                }
                                0 !== e.collector_host.length && (t = r(e.collector_host), o = r(e.collector_port), e = [new RegExp("^https?://" + t + ":" + o)], "80" === o ? e.push(new RegExp("^http://" + t)) : "443" === o && e.push(new RegExp("^https://" + t)), this._internalExclusions = e)
                            }
                        }, {
                            key: "_isValidContext",
                            value: function() {
                                return "undefined" != typeof window && !!window.XMLHttpRequest && !!window.XMLHttpRequest.prototype
                            }
                        }, {
                            key: "_instrumentSetRequestHeader",
                            value: function() {
                                return function(e, t) {
                                    return this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[e] = t, c.setRequestHeader.apply(this, arguments)
                                }
                            }
                        }, {
                            key: "_instrumentOpen",
                            value: function() {
                                var l = this,
                                    g = this._tracer;
                                return function(t, o, e, r, i) {
                                    if (!l._shouldTrace(g, this, o)) return c.open.apply(this, arguments);
                                    var n = g.options(),
                                        s = g.startSpan("XMLHttpRequest");
                                    g.addActiveRootSpan(s), this.__tracer_span = s, this.__tracer_url = o;
                                    var a = {
                                        method: t,
                                        url: o,
                                        async: e,
                                        user: r
                                    };
                                    o && (a.url_pathname = o.split("?")[0]);
                                    var p = u({}, a);
                                    n.include_cookies && (p.cookies = function() {
                                        if ("undefined" == typeof document || !document.cookie) return null;
                                        for (var e = document.cookie.split(";"), t = {}, o = 0, r = 0; r < e.length; r++) {
                                            var i = e[r].split("=", 2);
                                            if (2 === i.length) {
                                                var n = i[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                                t[n] = decodeURIComponent(i[1]);
                                                try {
                                                    t[n] = JSON.parse(t[n])
                                                } catch (e) {}
                                                o++
                                            }
                                        }
                                        return 0 < o ? t : null
                                    }());
                                    n = void 0 === e || e;
                                    n && this.addEventListener("readystatechange", function() {
                                        var e;
                                        0 === this.readyState ? s.log({
                                            readyState: 0,
                                            event: "unsent"
                                        }) : 1 === this.readyState ? s.log({
                                            readyState: 1,
                                            event: "sending"
                                        }) : 2 === this.readyState ? (s.log({
                                            readyState: 2,
                                            event: "headers received",
                                            method: t,
                                            url: o,
                                            openPayload: p,
                                            headers: d(this)
                                        }), s.addTags(a)) : 3 === this.readyState ? s.log({
                                            readyState: 3,
                                            event: "loading"
                                        }) : 4 === this.readyState ? (e = this.responseType, s.log({
                                            readyState: 4,
                                            url: o,
                                            method: t,
                                            headers: d(this),
                                            status: this.status,
                                            statusText: this.statusText,
                                            responseType: e
                                        }), g.removeActiveRootSpan(s), s.finish()) : s.log({
                                            readyState: this.readyState
                                        })
                                    });
                                    e = c.open.apply(this, arguments);
                                    return n || (g.removeActiveRootSpan(s), s.finish()), e
                                }
                            }
                        }, {
                            key: "_instrumentSend",
                            value: function() {
                                var n = this,
                                    s = this._tracer;
                                return function() {
                                    var t = this;
                                    if (!n._shouldTrace(s, this, this.__tracer_url)) return c.send.apply(this, arguments);
                                    var e = this.__tracer_span;
                                    if (!e) return c.send.apply(this, arguments);
                                    var o = Array.prototype.slice.call(arguments),
                                        r = void 0;
                                    if (1 === o.length) {
                                        o[0] && o[0].length && (r = o[0].length);
                                        try {
                                            o = JSON.parse(o[0])
                                        } catch (e) {}
                                    }
                                    var i, r = void 0 === r ? "" : ", data length=" + r;
                                    return e.log({
                                        event: "send",
                                        data_length: r
                                    }), n._shouldAddHeadersToRequest(s, this.__tracer_url) && (i = {}, s.inject(e.context(), a.FORMAT_HTTP_HEADERS, i), Object.keys(i).forEach(function(e) {
                                        c.setRequestHeader.call(t, e, i[e])
                                    })), c.send.apply(this, arguments)
                                }
                            }
                        }, {
                            key: "_shouldTrace",
                            value: function(e, t, o) {
                                if (!e || !o) return !1;
                                e = e.options();
                                return !(e.disabled || this._internalExclusions.some(function(e) {
                                    return e.test(o)
                                }) || e.xhr_url_exclusion_patterns.some(function(e) {
                                    return e.test(o)
                                }) || !e.xhr_url_inclusion_patterns.some(function(e) {
                                    return e.test(o)
                                }))
                            }
                        }, {
                            key: "_shouldAddHeadersToRequest",
                            value: function(e, t) {
                                if (!e || !t) return !1;
                                e = e.options();
                                return !e.disabled && !e.xhr_url_header_exclusion_patterns.some(function(e) {
                                    return e.test(t)
                                }) && !!e.xhr_url_header_inclusion_patterns.some(function(e) {
                                    return e.test(t)
                                })
                            }
                        }]), r = n;

                        function n() {
                            ! function(e) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
                        }
                        e.exports = new r
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                                return t && i(e.prototype, t), o && i(e, o), e
                            },
                            a = function(e, t) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return function(e, t) {
                                    var o = [],
                                        r = !0,
                                        i = !1,
                                        n = void 0;
                                    try {
                                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                                    } catch (e) {
                                        i = !0, n = e
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (i) throw n
                                        }
                                    }
                                    return o
                                }(e, t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            },
                            p = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(o(2));

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var l = void 0;
                        "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && void 0 !== window.fetch && (l = window.fetch);
                        r(n, [{
                            key: "name",
                            value: function() {
                                return "instrument_fetch"
                            }
                        }, {
                            key: "addOptions",
                            value: function(e) {
                                e.addOption("fetch_instrumentation", {
                                    type: "bool",
                                    defaultValue: !1
                                }), e.addOption("fetch_url_inclusion_patterns", {
                                    type: "array",
                                    defaultValue: [/.*/]
                                }), e.addOption("fetch_url_exclusion_patterns", {
                                    type: "array",
                                    defaultValue: []
                                }), e.addOption("fetch_url_header_inclusion_patterns", {
                                    type: "array",
                                    defaultValue: [/.*/]
                                }), e.addOption("fetch_url_header_exclusion_patterns", {
                                    type: "array",
                                    defaultValue: []
                                }), e.addOption("include_cookies", {
                                    type: "bool",
                                    defaultValue: !0
                                })
                            }
                        }, {
                            key: "start",
                            value: function(e) {
                                var t;
                                this._enabled && (t = (this._tracer = e).options(), this._addServiceHostToExclusions(t), this._handleOptions({}, t), e.on("options", this._handleOptions))
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this._enabled && (window.fetch = l)
                            }
                        }, {
                            key: "_handleOptions",
                            value: function(e, t) {
                                e.collector_host && this._addServiceHostToExclusions(t), !this._proxyInited && t.fetch_instrumentation && (this._proxyInited = !0, window.fetch = this._instrumentFetch())
                            }
                        }, {
                            key: "_addServiceHostToExclusions",
                            value: function(e) {
                                var t, o;

                                function r(e) {
                                    return ("" + e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                }
                                0 !== e.collector_host.length && (t = r(e.collector_host), o = r(e.collector_port), e = [new RegExp("^https?://" + t + ":" + o)], "80" === o ? e.push(new RegExp("^http://" + t)) : "443" === o && e.push(new RegExp("^https://" + t)), this._internalExclusions = e)
                            }
                        }, {
                            key: "_isValidContext",
                            value: function() {
                                return "undefined" != typeof window && !!window.fetch
                            }
                        }, {
                            key: "_instrumentFetch",
                            value: function() {
                                var n = this,
                                    s = this._tracer;
                                return function(e, t) {
                                    var o = new Request(e, t),
                                        e = s.options();
                                    if (!n._shouldTrace(s, o.url)) return l(o);
                                    var r = s.startSpan("fetch");
                                    s.addActiveRootSpan(r);
                                    var i, t = new URL(o.url),
                                        t = {
                                            method: o.method,
                                            url: o.url,
                                            hash: t.hash,
                                            href: t.href,
                                            protocol: t.protocol,
                                            origin: t.origin,
                                            host: t.host,
                                            hostname: t.hostname,
                                            port: t.port,
                                            pathname: t.pathname,
                                            search: t.search
                                        };
                                    return e.include_cookies && (t.cookies = function() {
                                        if ("undefined" == typeof document || !document.cookie) return null;
                                        for (var e = document.cookie.split(";"), t = {}, o = 0, r = 0; r < e.length; r++) {
                                            var i = e[r].split("=", 2);
                                            if (2 === i.length) {
                                                var n = i[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                                t[n] = decodeURIComponent(i[1]);
                                                try {
                                                    t[n] = JSON.parse(t[n])
                                                } catch (e) {}
                                                o++
                                            }
                                        }
                                        return 0 < o ? t : null
                                    }()), n._shouldAddHeadersToRequest(s, o.url) && (i = {}, s.inject(r.context(), p.FORMAT_HTTP_HEADERS, i), Object.keys(i).forEach(function(e) {
                                        o.headers.get(e) || o.headers.set(e, i[e])
                                    })), r.log({
                                        event: "sending",
                                        method: o.method,
                                        url: o.url,
                                        openPayload: t
                                    }), r.addTags(t), l(o).then(function(n) {
                                        return n.ok || r.addTags({
                                            error: !0
                                        }), r.log({
                                            method: o.method,
                                            headers: function() {
                                                for (var e = {}, t = n.headers.entries(), o = 0; o < t.length; o++) {
                                                    var r = t[o],
                                                        i = a(r, 2),
                                                        r = i[0],
                                                        i = i[1];
                                                    e[r] = i
                                                }
                                                return e
                                            }(),
                                            status: n.status,
                                            statusText: n.statusText,
                                            responseType: n.type,
                                            url: n.url
                                        }), s.removeActiveRootSpan(r), r.finish(), n
                                    }).catch(function(e) {
                                        throw r.addTags({
                                            error: !0
                                        }), s.removeActiveRootSpan(r), r.log({
                                            event: "error",
                                            error: e
                                        }), r.finish(), e
                                    })
                                }
                            }
                        }, {
                            key: "_shouldTrace",
                            value: function(e, t) {
                                if (!e || !t) return !1;
                                e = e.options();
                                return !(e.disabled || this._internalExclusions.some(function(e) {
                                    return e.test(t)
                                }) || e.fetch_url_exclusion_patterns.some(function(e) {
                                    return e.test(t)
                                }) || !e.fetch_url_inclusion_patterns.some(function(e) {
                                    return e.test(t)
                                }))
                            }
                        }, {
                            key: "_shouldAddHeadersToRequest",
                            value: function(e, t) {
                                if (!e || !t) return !1;
                                e = e.options();
                                return !e.disabled && !e.fetch_url_header_exclusion_patterns.some(function(e) {
                                    return e.test(t)
                                }) && !!e.fetch_url_header_inclusion_patterns.some(function(e) {
                                    return e.test(t)
                                })
                            }
                        }]), r = n;

                        function n() {
                            ! function(e) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
                        }
                        e.exports = new r
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                                return t && i(e.prototype, t), o && i(e, o), e
                            },
                            n = (o = o(0)) && o.__esModule ? o : {
                                default: o
                            };

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        r(s, [{
                            key: "name",
                            value: function() {
                                return "instrument_page_load"
                            }
                        }, {
                            key: "addOptions",
                            value: function(e) {
                                e.addOption("instrument_page_load", {
                                    type: "bool",
                                    defaultValue: !1
                                })
                            }
                        }, {
                            key: "start",
                            value: function(e) {
                                this._inited || (this._inited = !0, "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && "object" == ("undefined" == typeof document ? "undefined" : _typeof(document)) && e.options().instrument_page_load && (this._ensureSpanStarted(e), document.addEventListener("readystatechange", this._handleReadyStateChange.bind(this))))
                            }
                        }, {
                            key: "stop",
                            value: function() {}
                        }, {
                            key: "_ensureSpanStarted",
                            value: function(e) {
                                this._span || (this._span = e.startSpan("document/load"), e.addActiveRootSpan(this._span))
                            }
                        }, {
                            key: "_handleReadyStateChange",
                            value: function() {
                                var e, t, o;
                                this._span && (e = this._span, o = void 0, "complete" === (t = document.readyState) && (o = {}, window.performance && performance.timing && (this._addTimingSpans(e, performance.timing), o["window.performance.timing"] = performance.timing)), e.logEvent("document.readystatechange " + t, o), "complete" === t && (e.tracer() && e.tracer().removeActiveRootSpan(e.tracer()), e.finish()))
                            }
                        }, {
                            key: "_copyNavigatorProperties",
                            value: function(e) {
                                var t, o = {};
                                for (t in e) try {
                                    var r = e[t];
                                    switch (t) {
                                        case "plugins":
                                            for (var i = [], n = 0; n < r.length; n++) {
                                                var s = r.item(n);
                                                i.push({
                                                    name: s.name,
                                                    description: s.description
                                                })
                                            }
                                            o[t] = i;
                                            break;
                                        case "mimeTypes":
                                            for (var a = [], p = 0; p < r.length; p++) {
                                                var l = r.item(p);
                                                a.push({
                                                    type: l.type,
                                                    description: l.description,
                                                    suffixes: l.suffixes
                                                })
                                            }
                                            o[t] = a;
                                            break;
                                        default:
                                            o[t] = r
                                    }
                                } catch (e) {}
                                return o
                            }
                        }, {
                            key: "_addTimingSpans",
                            value: function(r, e) {
                                var i = this;
                                r && (r.setTag("user_agent", navigator.userAgent), (0, n.default)(e, function(e, t) {
                                    var o;
                                    "number" == typeof e && 0 !== e && (o = void 0, "navigationStart" === t && "object" == ("undefined" == typeof navigator ? "undefined" : _typeof(navigator)) && (o = {
                                        navigator: i._copyNavigatorProperties(navigator)
                                    }), r.log({
                                        message: "document " + t,
                                        payload: o
                                    }, e))
                                }), r.setBeginMicros(1e3 * e.navigationStart), r.tracer().startSpan("document/time_to_first_byte", {
                                    childOf: r
                                }).setBeginMicros(1e3 * e.requestStart).setEndMicros(1e3 * e.responseStart).finish(), r.tracer().startSpan("document/response_transfer", {
                                    childOf: r
                                }).setBeginMicros(1e3 * e.responseStart).setEndMicros(1e3 * e.responseEnd).finish(), r.tracer().startSpan("document/dom_load", {
                                    childOf: r
                                }).setBeginMicros(1e3 * e.domLoading).setEndMicros(1e3 * e.domInteractive).finish())
                            }
                        }]), r = s;

                        function s() {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._inited = !1, this._span = null
                        }
                        e.exports = new r
                    }, function(e, t, o) {
                        "use strict";

                        function r(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = (function(e, t, o) {
                            return t && r(e.prototype, t), o && r(e, o), e
                        }(n, [{
                            key: "ensureConnection",
                            value: function(e) {
                                this._host = e.collector_host, this._port = e.collector_port, this._path = e.collector_path, this._encryption = e.collector_encryption
                            }
                        }, {
                            key: "report",
                            value: function(e, t, o, r) {
                                try {
                                    e ? this._reportAsyncScript(t, o, r) : this._reportAJAX(t, o, r)
                                } catch (e) {
                                    return r(e, null)
                                }
                            }
                        }, {
                            key: "_reportAJAX",
                            value: function(e, t, o) {
                                var r = JSON.stringify(t.toThrift()),
                                    i = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/api/v0/reports",
                                    t = new XMLHttpRequest;
                                t.open("POST", i), t.setRequestHeader("LightStep-Access-Token", e.getAccessToken()), t.setRequestHeader("Content-Type", "application/json"), t.onreadystatechange = function() {
                                    if (4 === this.readyState) {
                                        var e = null,
                                            t = null;
                                        if (200 !== this.status) e = new Error("status code = " + this.status);
                                        else if (this.responseText) try {
                                            t = JSON.parse(this.responseText)
                                        } catch (t) {
                                            e = t
                                        } else e = new Error("unexpected empty response");
                                        return o(e, t)
                                    }
                                }, t.send(r)
                            }
                        }, {
                            key: "_reportAsyncScript",
                            value: function(e, t, o) {
                                e = JSON.stringify(e.toThrift()), t = JSON.stringify(t.toThrift()), e = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/_rpc/v1/reports/uri_encoded?auth=" + encodeURIComponent(e) + "&report=" + encodeURIComponent(t), t = document.createElement("script");
                                t.async = !0, t.defer = !0, t.src = e, t.type = "text/javascript";
                                e = document.getElementsByTagName("head")[0];
                                return e && e.appendChild(t), o(null, null)
                            }
                        }]), n);

                        function n() {
                            ! function(e) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._host = "", this._port = 0, this._path = "", this._encryption = ""
                        }
                        t.default = i, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                            return t && i(e.prototype, t), o && i(e, o), e
                        };

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var n = o(3),
                            r = (r(s, [{
                                key: "ensureConnection",
                                value: function(e) {
                                    this._host = e.collector_host, this._port = e.collector_port, this._path = e.collector_path, this._encryption = e.collector_encryption
                                }
                            }, {
                                key: "report",
                                value: function(e, t, o, r) {
                                    try {
                                        e || this._reportAJAX(t, o, r)
                                    } catch (e) {
                                        return r(e, null)
                                    }
                                }
                            }, {
                                key: "_reportAJAX",
                                value: function(e, t, o) {
                                    var r = t.toProto(e),
                                        t = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/api/v2/reports",
                                        e = new XMLHttpRequest;
                                    e.responseType = "arraybuffer", e.open("POST", t), e.setRequestHeader("Accept", "application/octet-stream"), e.setRequestHeader("Content-Type", "application/octet-stream"), e.onreadystatechange = function() {
                                        if (4 === this.readyState) {
                                            var e = null,
                                                t = null;
                                            if (200 !== this.status) e = new Error("status code = " + this.status);
                                            else if (this.response) try {
                                                t = n.ReportResponse.deserializeBinary(this.response).toObject()
                                            } catch (t) {
                                                e = t
                                            } else e = new Error("unexpected empty response");
                                            return o(e, t)
                                        }
                                    };
                                    r = r.serializeBinary();
                                    e.send(r)
                                }
                            }]), s);

                        function s() {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._host = "", this._port = 0, this._path = "", this._encryption = ""
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, D, t) {
                        "use strict";
                        (function(e) {
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                             * @license  MIT
                             */
                            var a = t(43),
                                n = t(44),
                                s = t(45);

                            function o() {
                                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                            }

                            function i(e, t) {
                                if (o() < t) throw new RangeError("Invalid typed array length");
                                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
                            }

                            function u(e, t, o) {
                                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, o);
                                if ("number" != typeof e) return r(this, e, t, o);
                                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                                return l(this, e)
                            }

                            function r(e, t, o, r) {
                                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, o, r) {
                                    if (t.byteLength, o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
                                    if (t.byteLength < o + (r || 0)) throw new RangeError("'length' is out of bounds");
                                    return t = void 0 === o && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, o) : new Uint8Array(t, o, r), u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = g(e, t), e
                                }(e, t, o, r) : "string" == typeof t ? function(e, t, o) {
                                    if ("string" == typeof o && "" !== o || (o = "utf8"), !u.isEncoding(o)) throw new TypeError('"encoding" must be a valid string encoding');
                                    var r = 0 | d(t, o),
                                        o = (e = i(e, r)).write(t, o);
                                    return o !== r && (e = e.slice(0, o)), e
                                }(e, t, o) : function(e, t) {
                                    if (u.isBuffer(t)) {
                                        var o = 0 | c(t.length);
                                        return 0 === (e = i(e, o)).length || t.copy(e, 0, 0, o), e
                                    }
                                    if (t) {
                                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? i(e, 0) : g(e, t);
                                        if ("Buffer" === t.type && s(t.data)) return g(e, t.data)
                                    }
                                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                                }(e, t)
                            }

                            function p(e) {
                                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                                if (e < 0) throw new RangeError('"size" argument must not be negative')
                            }

                            function l(e, t) {
                                if (p(t), e = i(e, t < 0 ? 0 : 0 | c(t)), !u.TYPED_ARRAY_SUPPORT)
                                    for (var o = 0; o < t; ++o) e[o] = 0;
                                return e
                            }

                            function g(e, t) {
                                var o = t.length < 0 ? 0 : 0 | c(t.length);
                                e = i(e, o);
                                for (var r = 0; r < o; r += 1) e[r] = 255 & t[r];
                                return e
                            }

                            function c(e) {
                                if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                                return 0 | e
                            }

                            function d(e, t) {
                                if (u.isBuffer(e)) return e.length;
                                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                                "string" != typeof e && (e = "" + e);
                                var o = e.length;
                                if (0 === o) return 0;
                                for (var r = !1;;) switch (t) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return o;
                                    case "utf8":
                                    case "utf-8":
                                    case void 0:
                                        return j(e).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * o;
                                    case "hex":
                                        return o >>> 1;
                                    case "base64":
                                        return A(e).length;
                                    default:
                                        if (r) return j(e).length;
                                        t = ("" + t).toLowerCase(), r = !0
                                }
                            }

                            function f(e, t, o) {
                                var r = e[t];
                                e[t] = e[o], e[o] = r
                            }

                            function h(e, t, o, r, i) {
                                if (0 === e.length) return -1;
                                if ("string" == typeof o ? (r = o, o = 0) : 2147483647 < o ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, isNaN(o) && (o = i ? 0 : e.length - 1), o < 0 && (o = e.length + o), o >= e.length) {
                                    if (i) return -1;
                                    o = e.length - 1
                                } else if (o < 0) {
                                    if (!i) return -1;
                                    o = 0
                                }
                                if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, o, r, i);
                                if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(e, t, o) : y(e, [t], o, r, i);
                                throw new TypeError("val must be string, number or Buffer")
                            }

                            function y(e, t, o, r, i) {
                                var n = 1,
                                    s = e.length,
                                    a = t.length;
                                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (e.length < 2 || t.length < 2) return -1;
                                    s /= n = 2, a /= 2, o /= 2
                                }

                                function p(e, t) {
                                    return 1 === n ? e[t] : e.readUInt16BE(t * n)
                                }
                                if (i)
                                    for (var l = -1, g = o; g < s; g++)
                                        if (p(e, g) === p(t, -1 === l ? 0 : g - l)) {
                                            if (-1 === l && (l = g), g - l + 1 === a) return l * n
                                        } else -1 !== l && (g -= g - l), l = -1;
                                else
                                    for (s < o + a && (o = s - a), g = o; 0 <= g; g--) {
                                        for (var u = !0, c = 0; c < a; c++)
                                            if (p(e, g + c) !== p(t, c)) {
                                                u = !1;
                                                break
                                            }
                                        if (u) return g
                                    }
                                return -1
                            }

                            function b(e, t, o, r) {
                                return w(function(e) {
                                    for (var t = [], o = 0; o < e.length; ++o) t.push(255 & e.charCodeAt(o));
                                    return t
                                }(t), e, o, r)
                            }

                            function _(e, t, o) {
                                o = Math.min(e.length, o);
                                for (var r = [], i = t; i < o;) {
                                    var n, s, a, p, l = e[i],
                                        g = null,
                                        u = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                                    if (i + u <= o) switch (u) {
                                        case 1:
                                            l < 128 && (g = l);
                                            break;
                                        case 2:
                                            128 == (192 & (n = e[i + 1])) && 127 < (p = (31 & l) << 6 | 63 & n) && (g = p);
                                            break;
                                        case 3:
                                            n = e[i + 1], s = e[i + 2], 128 == (192 & n) && 128 == (192 & s) && 2047 < (p = (15 & l) << 12 | (63 & n) << 6 | 63 & s) && (p < 55296 || 57343 < p) && (g = p);
                                            break;
                                        case 4:
                                            n = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & n) && 128 == (192 & s) && 128 == (192 & a) && 65535 < (p = (15 & l) << 18 | (63 & n) << 12 | (63 & s) << 6 | 63 & a) && p < 1114112 && (g = p)
                                    }
                                    null === g ? (g = 65533, u = 1) : 65535 < g && (g -= 65536, r.push(g >>> 10 & 1023 | 55296), g = 56320 | 1023 & g), r.push(g), i += u
                                }
                                return function(e) {
                                    var t = e.length;
                                    if (t <= m) return String.fromCharCode.apply(String, e);
                                    for (var o = "", r = 0; r < t;) o += String.fromCharCode.apply(String, e.slice(r, r += m));
                                    return o
                                }(r)
                            }
                            D.Buffer = u, D.SlowBuffer = function(e) {
                                return +e != e && (e = 0), u.alloc(+e)
                            }, D.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                                try {
                                    var e = new Uint8Array(1);
                                    return e.__proto__ = {
                                        __proto__: Uint8Array.prototype,
                                        foo: function() {
                                            return 42
                                        }
                                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                                } catch (e) {
                                    return !1
                                }
                            }(), D.kMaxLength = o(), u.poolSize = 8192, u._augment = function(e) {
                                return e.__proto__ = u.prototype, e
                            }, u.from = function(e, t, o) {
                                return r(null, e, t, o)
                            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                                value: null,
                                configurable: !0
                            })), u.alloc = function(e, t, o) {
                                return r = null, t = t, o = o, p(e = e), !(e <= 0) && void 0 !== t ? "string" == typeof o ? i(r, e).fill(t, o) : i(r, e).fill(t) : i(r, e);
                                var r
                            }, u.allocUnsafe = function(e) {
                                return l(null, e)
                            }, u.allocUnsafeSlow = function(e) {
                                return l(null, e)
                            }, u.isBuffer = function(e) {
                                return !(null == e || !e._isBuffer)
                            }, u.compare = function(e, t) {
                                if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                                if (e === t) return 0;
                                for (var o = e.length, r = t.length, i = 0, n = Math.min(o, r); i < n; ++i)
                                    if (e[i] !== t[i]) {
                                        o = e[i], r = t[i];
                                        break
                                    }
                                return o < r ? -1 : r < o ? 1 : 0
                            }, u.isEncoding = function(e) {
                                switch (String(e).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, u.concat = function(e, t) {
                                if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === e.length) return u.alloc(0);
                                if (void 0 === t)
                                    for (i = t = 0; i < e.length; ++i) t += e[i].length;
                                for (var o = u.allocUnsafe(t), r = 0, i = 0; i < e.length; ++i) {
                                    var n = e[i];
                                    if (!u.isBuffer(n)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    n.copy(o, r), r += n.length
                                }
                                return o
                            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                                var e = this.length;
                                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                                return this
                            }, u.prototype.swap32 = function() {
                                var e = this.length;
                                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
                                return this
                            }, u.prototype.swap64 = function() {
                                var e = this.length;
                                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
                                return this
                            }, u.prototype.toString = function() {
                                var e = 0 | this.length;
                                return 0 == e ? "" : 0 === arguments.length ? _(this, 0, e) : function(e, t, o) {
                                    var r, i, n, s = !1;
                                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                                    if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
                                    if ((o >>>= 0) <= (t >>>= 0)) return "";
                                    for (e = e || "utf8";;) switch (e) {
                                        case "hex":
                                            return function(e, t, o) {
                                                var r = e.length;
                                                (!t || t < 0) && (t = 0), (!o || o < 0 || r < o) && (o = r);
                                                for (var i = "", n = t; n < o; ++n) i += function(e) {
                                                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                                                }(e[n]);
                                                return i
                                            }(this, t, o);
                                        case "utf8":
                                        case "utf-8":
                                            return _(this, t, o);
                                        case "ascii":
                                            return function(e, t, o) {
                                                var r = "";
                                                o = Math.min(e.length, o);
                                                for (var i = t; i < o; ++i) r += String.fromCharCode(127 & e[i]);
                                                return r
                                            }(this, t, o);
                                        case "latin1":
                                        case "binary":
                                            return function(e, t, o) {
                                                var r = "";
                                                o = Math.min(e.length, o);
                                                for (var i = t; i < o; ++i) r += String.fromCharCode(e[i]);
                                                return r
                                            }(this, t, o);
                                        case "base64":
                                            return r = this, n = o, 0 === (i = t) && n === r.length ? a.fromByteArray(r) : a.fromByteArray(r.slice(i, n));
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return function(e, t, o) {
                                                for (var r = e.slice(t, o), i = "", n = 0; n < r.length; n += 2) i += String.fromCharCode(r[n] + 256 * r[n + 1]);
                                                return i
                                            }(this, t, o);
                                        default:
                                            if (s) throw new TypeError("Unknown encoding: " + e);
                                            e = (e + "").toLowerCase(), s = !0
                                    }
                                }.apply(this, arguments)
                            }, u.prototype.equals = function(e) {
                                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                                return this === e || 0 === u.compare(this, e)
                            }, u.prototype.inspect = function() {
                                var e = "",
                                    t = D.INSPECT_MAX_BYTES;
                                return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                            }, u.prototype.compare = function(e, t, o, r, i) {
                                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                                if (void 0 === t && (t = 0), void 0 === o && (o = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || o > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                                if (i <= r && o <= t) return 0;
                                if (i <= r) return -1;
                                if (o <= t) return 1;
                                if (this === e) return 0;
                                for (var n = (i >>>= 0) - (r >>>= 0), s = (o >>>= 0) - (t >>>= 0), a = Math.min(n, s), p = this.slice(r, i), l = e.slice(t, o), g = 0; g < a; ++g)
                                    if (p[g] !== l[g]) {
                                        n = p[g], s = l[g];
                                        break
                                    }
                                return n < s ? -1 : s < n ? 1 : 0
                            }, u.prototype.includes = function(e, t, o) {
                                return -1 !== this.indexOf(e, t, o)
                            }, u.prototype.indexOf = function(e, t, o) {
                                return h(this, e, t, o, !0)
                            }, u.prototype.lastIndexOf = function(e, t, o) {
                                return h(this, e, t, o, !1)
                            }, u.prototype.write = function(e, t, o, r) {
                                if (void 0 === t) r = "utf8", o = this.length, t = 0;
                                else if (void 0 === o && "string" == typeof t) r = t, o = this.length, t = 0;
                                else {
                                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    t |= 0, isFinite(o) ? (o |= 0, void 0 === r && (r = "utf8")) : (r = o, o = void 0)
                                }
                                var i = this.length - t;
                                if ((void 0 === o || i < o) && (o = i), 0 < e.length && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                r = r || "utf8";
                                for (var n, s, a, p, l, g, u = !1;;) switch (r) {
                                    case "hex":
                                        return function(e, t, o, r) {
                                            o = Number(o) || 0;
                                            var i = e.length - o;
                                            if ((!r || (r = Number(r)) > i) && (r = i), (i = t.length) % 2 != 0) throw new TypeError("Invalid hex string");
                                            i / 2 < r && (r = i / 2);
                                            for (var n = 0; n < r; ++n) {
                                                var s = parseInt(t.substr(2 * n, 2), 16);
                                                if (isNaN(s)) return n;
                                                e[o + n] = s
                                            }
                                            return n
                                        }(this, e, t, o);
                                    case "utf8":
                                    case "utf-8":
                                        return l = t, g = o, w(j(e, (p = this).length - l), p, l, g);
                                    case "ascii":
                                        return b(this, e, t, o);
                                    case "latin1":
                                    case "binary":
                                        return b(this, e, t, o);
                                    case "base64":
                                        return n = this, s = t, a = o, w(A(e), n, s, a);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return n = t, s = o, w(function(e, t) {
                                            for (var o, r, i = [], n = 0; n < e.length && !((t -= 2) < 0); ++n) o = (r = e.charCodeAt(n)) >> 8, r = r % 256, i.push(r), i.push(o);
                                            return i
                                        }(e, (a = this).length - n), a, n, s);
                                    default:
                                        if (u) throw new TypeError("Unknown encoding: " + r);
                                        r = ("" + r).toLowerCase(), u = !0
                                }
                            }, u.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            };
                            var m = 4096;

                            function M(e, t, o) {
                                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                                if (o < e + t) throw new RangeError("Trying to access beyond buffer length")
                            }

                            function v(e, t, o, r, i, n) {
                                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                if (i < t || t < n) throw new RangeError('"value" argument is out of bounds');
                                if (o + r > e.length) throw new RangeError("Index out of range")
                            }

                            function O(e, t, o, r) {
                                t < 0 && (t = 65535 + t + 1);
                                for (var i = 0, n = Math.min(e.length - o, 2); i < n; ++i) e[o + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                            }

                            function E(e, t, o, r) {
                                t < 0 && (t = 4294967295 + t + 1);
                                for (var i = 0, n = Math.min(e.length - o, 4); i < n; ++i) e[o + i] = t >>> 8 * (r ? i : 3 - i) & 255
                            }

                            function S(e, t, o, r) {
                                if (o + r > e.length) throw new RangeError("Index out of range");
                                if (o < 0) throw new RangeError("Index out of range")
                            }

                            function F(e, t, o, r, i) {
                                return i || S(e, 0, o, 4), n.write(e, t, o, r, 23, 4), o + 4
                            }

                            function R(e, t, o, r, i) {
                                return i || S(e, 0, o, 8), n.write(e, t, o, r, 52, 8), o + 8
                            }
                            u.prototype.slice = function(e, t) {
                                var o = this.length;
                                if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : o < e && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : o < t && (t = o), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(i = this.subarray(e, t)).__proto__ = u.prototype;
                                else
                                    for (var r = t - e, i = new u(r, void 0), n = 0; n < r; ++n) i[n] = this[n + e];
                                return i
                            }, u.prototype.readUIntLE = function(e, t, o) {
                                e |= 0, t |= 0, o || M(e, t, this.length);
                                for (var r = this[e], i = 1, n = 0; ++n < t && (i *= 256);) r += this[e + n] * i;
                                return r
                            }, u.prototype.readUIntBE = function(e, t, o) {
                                e |= 0, t |= 0, o || M(e, t, this.length);
                                for (var r = this[e + --t], i = 1; 0 < t && (i *= 256);) r += this[e + --t] * i;
                                return r
                            }, u.prototype.readUInt8 = function(e, t) {
                                return t || M(e, 1, this.length), this[e]
                            }, u.prototype.readUInt16LE = function(e, t) {
                                return t || M(e, 2, this.length), this[e] | this[e + 1] << 8
                            }, u.prototype.readUInt16BE = function(e, t) {
                                return t || M(e, 2, this.length), this[e] << 8 | this[e + 1]
                            }, u.prototype.readUInt32LE = function(e, t) {
                                return t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                            }, u.prototype.readUInt32BE = function(e, t) {
                                return t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                            }, u.prototype.readIntLE = function(e, t, o) {
                                e |= 0, t |= 0, o || M(e, t, this.length);
                                for (var r = this[e], i = 1, n = 0; ++n < t && (i *= 256);) r += this[e + n] * i;
                                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
                            }, u.prototype.readIntBE = function(e, t, o) {
                                e |= 0, t |= 0, o || M(e, t, this.length);
                                for (var r = t, i = 1, n = this[e + --r]; 0 < r && (i *= 256);) n += this[e + --r] * i;
                                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                            }, u.prototype.readInt8 = function(e, t) {
                                return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                            }, u.prototype.readInt16LE = function(e, t) {
                                t || M(e, 2, this.length);
                                e = this[e] | this[e + 1] << 8;
                                return 32768 & e ? 4294901760 | e : e
                            }, u.prototype.readInt16BE = function(e, t) {
                                t || M(e, 2, this.length);
                                e = this[e + 1] | this[e] << 8;
                                return 32768 & e ? 4294901760 | e : e
                            }, u.prototype.readInt32LE = function(e, t) {
                                return t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                            }, u.prototype.readInt32BE = function(e, t) {
                                return t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                            }, u.prototype.readFloatLE = function(e, t) {
                                return t || M(e, 4, this.length), n.read(this, e, !0, 23, 4)
                            }, u.prototype.readFloatBE = function(e, t) {
                                return t || M(e, 4, this.length), n.read(this, e, !1, 23, 4)
                            }, u.prototype.readDoubleLE = function(e, t) {
                                return t || M(e, 8, this.length), n.read(this, e, !0, 52, 8)
                            }, u.prototype.readDoubleBE = function(e, t) {
                                return t || M(e, 8, this.length), n.read(this, e, !1, 52, 8)
                            }, u.prototype.writeUIntLE = function(e, t, o, r) {
                                e = +e, t |= 0, o |= 0, r || v(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
                                var i = 1,
                                    n = 0;
                                for (this[t] = 255 & e; ++n < o && (i *= 256);) this[t + n] = e / i & 255;
                                return t + o
                            }, u.prototype.writeUIntBE = function(e, t, o, r) {
                                e = +e, t |= 0, o |= 0, r || v(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
                                var i = o - 1,
                                    n = 1;
                                for (this[t + i] = 255 & e; 0 <= --i && (n *= 256);) this[t + i] = e / n & 255;
                                return t + o
                            }, u.prototype.writeUInt8 = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                            }, u.prototype.writeUInt16LE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                            }, u.prototype.writeUInt16BE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                            }, u.prototype.writeUInt32LE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : E(this, e, t, !0), t + 4
                            }, u.prototype.writeUInt32BE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : E(this, e, t, !1), t + 4
                            }, u.prototype.writeIntLE = function(e, t, o, r) {
                                e = +e, t |= 0, r || v(this, e, t, o, (r = Math.pow(2, 8 * o - 1)) - 1, -r);
                                var i = 0,
                                    n = 1,
                                    s = 0;
                                for (this[t] = 255 & e; ++i < o && (n *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / n >> 0) - s & 255;
                                return t + o
                            }, u.prototype.writeIntBE = function(e, t, o, r) {
                                e = +e, t |= 0, r || v(this, e, t, o, (r = Math.pow(2, 8 * o - 1)) - 1, -r);
                                var i = o - 1,
                                    n = 1,
                                    s = 0;
                                for (this[t + i] = 255 & e; 0 <= --i && (n *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / n >> 0) - s & 255;
                                return t + o
                            }, u.prototype.writeInt8 = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                            }, u.prototype.writeInt16LE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                            }, u.prototype.writeInt16BE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                            }, u.prototype.writeInt32LE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : E(this, e, t, !0), t + 4
                            }, u.prototype.writeInt32BE = function(e, t, o) {
                                return e = +e, t |= 0, o || v(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : E(this, e, t, !1), t + 4
                            }, u.prototype.writeFloatLE = function(e, t, o) {
                                return F(this, e, t, !0, o)
                            }, u.prototype.writeFloatBE = function(e, t, o) {
                                return F(this, e, t, !1, o)
                            }, u.prototype.writeDoubleLE = function(e, t, o) {
                                return R(this, e, t, !0, o)
                            }, u.prototype.writeDoubleBE = function(e, t, o) {
                                return R(this, e, t, !1, o)
                            }, u.prototype.copy = function(e, t, o, r) {
                                if (o = o || 0, r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < r && r < o && (r = o), r === o) return 0;
                                if (0 === e.length || 0 === this.length) return 0;
                                if (t < 0) throw new RangeError("targetStart out of bounds");
                                if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
                                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                                r > this.length && (r = this.length), e.length - t < r - o && (r = e.length - t + o);
                                var i, n = r - o;
                                if (this === e && o < t && t < r)
                                    for (i = n - 1; 0 <= i; --i) e[i + t] = this[i + o];
                                else if (n < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                                    for (i = 0; i < n; ++i) e[i + t] = this[i + o];
                                else Uint8Array.prototype.set.call(e, this.subarray(o, o + n), t);
                                return n
                            }, u.prototype.fill = function(e, t, o, r) {
                                if ("string" == typeof e) {
                                    var i;
                                    if ("string" == typeof t ? (r = t, t = 0, o = this.length) : "string" == typeof o && (r = o, o = this.length), 1 === e.length && (i = e.charCodeAt(0)) < 256 && (e = i), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                                    if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                                } else "number" == typeof e && (e &= 255);
                                if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
                                if (o <= t) return this;
                                if (t >>>= 0, o = void 0 === o ? this.length : o >>> 0, "number" == typeof(e = e || 0))
                                    for (a = t; a < o; ++a) this[a] = e;
                                else
                                    for (var n = u.isBuffer(e) ? e : j(new u(e, r).toString()), s = n.length, a = 0; a < o - t; ++a) this[a + t] = n[a % s];
                                return this
                            };
                            var T = /[^+\/0-9A-Za-z-_]/g;

                            function j(e, t) {
                                var o;
                                t = t || 1 / 0;
                                for (var r = e.length, i = null, n = [], s = 0; s < r; ++s) {
                                    if (55295 < (o = e.charCodeAt(s)) && o < 57344) {
                                        if (!i) {
                                            if (56319 < o) {
                                                -1 < (t -= 3) && n.push(239, 191, 189);
                                                continue
                                            }
                                            if (s + 1 === r) {
                                                -1 < (t -= 3) && n.push(239, 191, 189);
                                                continue
                                            }
                                            i = o;
                                            continue
                                        }
                                        if (o < 56320) {
                                            -1 < (t -= 3) && n.push(239, 191, 189), i = o;
                                            continue
                                        }
                                        o = 65536 + (i - 55296 << 10 | o - 56320)
                                    } else i && -1 < (t -= 3) && n.push(239, 191, 189);
                                    if (i = null, o < 128) {
                                        if (--t < 0) break;
                                        n.push(o)
                                    } else if (o < 2048) {
                                        if ((t -= 2) < 0) break;
                                        n.push(o >> 6 | 192, 63 & o | 128)
                                    } else if (o < 65536) {
                                        if ((t -= 3) < 0) break;
                                        n.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
                                    } else {
                                        if (!(o < 1114112)) throw new Error("Invalid code point");
                                        if ((t -= 4) < 0) break;
                                        n.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                                    }
                                }
                                return n
                            }

                            function A(e) {
                                return a.toByteArray(function(e) {
                                    if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(T, "")).length < 2) return "";
                                    for (var t; e.length % 4 != 0;) e += "=";
                                    return e
                                }(e))
                            }

                            function w(e, t, o, r) {
                                for (var i = 0; i < r && !(i + o >= t.length || i >= e.length); ++i) t[i + o] = e[i];
                                return i
                            }
                        }).call(this, t(20))
                    }, function(e, t, o) {
                        "use strict";
                        t.byteLength = function(e) {
                            var t = g(e),
                                e = t[0],
                                t = t[1];
                            return 3 * (e + t) / 4 - t
                        }, t.toByteArray = function(e) {
                            for (var t, o = g(e), r = o[0], o = o[1], i = new l(3 * (r + o) / 4 - o), n = 0, s = 0 < o ? r - 4 : r, a = 0; a < s; a += 4) t = p[e.charCodeAt(a)] << 18 | p[e.charCodeAt(a + 1)] << 12 | p[e.charCodeAt(a + 2)] << 6 | p[e.charCodeAt(a + 3)], i[n++] = t >> 16 & 255, i[n++] = t >> 8 & 255, i[n++] = 255 & t;
                            return 2 === o && (t = p[e.charCodeAt(a)] << 2 | p[e.charCodeAt(a + 1)] >> 4, i[n++] = 255 & t), 1 === o && (t = p[e.charCodeAt(a)] << 10 | p[e.charCodeAt(a + 1)] << 4 | p[e.charCodeAt(a + 2)] >> 2, i[n++] = t >> 8 & 255, i[n++] = 255 & t), i
                        }, t.fromByteArray = function(e) {
                            for (var t, o = e.length, r = o % 3, i = [], n = 0, s = o - r; n < s; n += 16383) i.push(function(e, t, o) {
                                for (var r, i = [], n = t; n < o; n += 3) r = (e[n] << 16 & 16711680) + (e[n + 1] << 8 & 65280) + (255 & e[n + 2]), i.push(function(e) {
                                    return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
                                }(r));
                                return i.join("")
                            }(e, n, s < n + 16383 ? s : n + 16383));
                            return 1 == r ? (t = e[o - 1], i.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 == r && (t = (e[o - 2] << 8) + e[o - 1], i.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "=")), i.join("")
                        };
                        for (var a = [], p = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, n = r.length; i < n; ++i) a[i] = r[i], p[r.charCodeAt(i)] = i;

                        function g(e) {
                            var t = e.length;
                            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                            e = e.indexOf("=");
                            return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4]
                        }
                        p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63
                    }, function(e, t) {
                        t.read = function(e, t, o, r, i) {
                            var n, s, a = 8 * i - r - 1,
                                p = (1 << a) - 1,
                                l = p >> 1,
                                g = -7,
                                u = o ? i - 1 : 0,
                                c = o ? -1 : 1,
                                o = e[t + u];
                            for (u += c, n = o & (1 << -g) - 1, o >>= -g, g += a; 0 < g; n = 256 * n + e[t + u], u += c, g -= 8);
                            for (s = n & (1 << -g) - 1, n >>= -g, g += r; 0 < g; s = 256 * s + e[t + u], u += c, g -= 8);
                            if (0 === n) n = 1 - l;
                            else {
                                if (n === p) return s ? NaN : 1 / 0 * (o ? -1 : 1);
                                s += Math.pow(2, r), n -= l
                            }
                            return (o ? -1 : 1) * s * Math.pow(2, n - r)
                        }, t.write = function(e, t, o, r, i, n) {
                            var s, a, p = 8 * n - i - 1,
                                l = (1 << p) - 1,
                                g = l >> 1,
                                u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                c = r ? 0 : n - 1,
                                d = r ? 1 : -1,
                                n = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (r = Math.pow(2, -s)) < 1 && (s--, r *= 2), 2 <= (t += 1 <= s + g ? u / r : u * Math.pow(2, 1 - g)) * r && (s++, r /= 2), l <= s + g ? (a = 0, s = l) : 1 <= s + g ? (a = (t * r - 1) * Math.pow(2, i), s += g) : (a = t * Math.pow(2, g - 1) * Math.pow(2, i), s = 0)); 8 <= i; e[o + c] = 255 & a, c += d, a /= 256, i -= 8);
                            for (s = s << i | a, p += i; 0 < p; e[o + c] = 255 & s, c += d, s /= 256, p -= 8);
                            e[o + c - d] |= 128 * n
                        }
                    }, function(e, t) {
                        var o = {}.toString;
                        e.exports = Array.isArray || function(e) {
                            return "[object Array]" == o.call(e)
                        }
                    }, function(e, t, o) {
                        "use strict";
                        var r = o(6),
                            i = r,
                            n = Function("return this")(),
                            s = o(47),
                            o = o(48);
                        i.exportSymbol("proto.google.api.http", null, n), proto.google.api.http = new r.ExtensionFieldInfo(72295728, {
                            http: 0
                        }, s.HttpRule, s.HttpRule.toObject, 0), o.MethodOptions.extensionsBinary[72295728] = new r.ExtensionFieldBinaryInfo(proto.google.api.http, r.BinaryReader.prototype.readMessage, r.BinaryWriter.prototype.writeMessage, s.HttpRule.serializeBinaryToWriter, s.HttpRule.deserializeBinaryFromReader, !1), o.MethodOptions.extensions[72295728] = proto.google.api.http, i.object.extend(t, proto.google.api)
                    }, function(e, t, o) {
                        "use strict";
                        var r = o(6),
                            i = r,
                            o = Function("return this")();
                        i.exportSymbol("proto.google.api.CustomHttpPattern", null, o), i.exportSymbol("proto.google.api.Http", null, o), i.exportSymbol("proto.google.api.HttpRule", null, o), proto.google.api.Http = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.api.Http.repeatedFields_, null)
                        }, i.inherits(proto.google.api.Http, r.Message), i.DEBUG && !COMPILED && (proto.google.api.Http.displayName = "proto.google.api.Http"), proto.google.api.Http.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.google.api.Http.prototype.toObject = function(e) {
                            return proto.google.api.Http.toObject(e, this)
                        }, proto.google.api.Http.toObject = function(e, t) {
                            var o = {
                                rulesList: r.Message.toObjectList(t.getRulesList(), proto.google.api.HttpRule.toObject, e),
                                fullyDecodeReservedExpansion: r.Message.getFieldWithDefault(t, 2, !1)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.api.Http.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.api.Http;
                            return proto.google.api.Http.deserializeBinaryFromReader(e, t)
                        }, proto.google.api.Http.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = new proto.google.api.HttpRule;
                                    t.readMessage(o, proto.google.api.HttpRule.deserializeBinaryFromReader), e.addRules(o);
                                    break;
                                case 2:
                                    o = t.readBool(), e.setFullyDecodeReservedExpansion(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.api.Http.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.api.Http.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.api.Http.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getRulesList()).length && t.writeRepeatedMessage(1, o, proto.google.api.HttpRule.serializeBinaryToWriter), (o = e.getFullyDecodeReservedExpansion()) && t.writeBool(2, o)
                        }, proto.google.api.Http.prototype.getRulesList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 1)
                        }, proto.google.api.Http.prototype.setRulesList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 1, e)
                        }, proto.google.api.Http.prototype.addRules = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.api.HttpRule, t)
                        }, proto.google.api.Http.prototype.clearRulesList = function() {
                            this.setRulesList([])
                        }, proto.google.api.Http.prototype.getFullyDecodeReservedExpansion = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.google.api.Http.prototype.setFullyDecodeReservedExpansion = function(e) {
                            r.Message.setProto3BooleanField(this, 2, e)
                        }, proto.google.api.HttpRule = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.api.HttpRule.repeatedFields_, proto.google.api.HttpRule.oneofGroups_)
                        }, i.inherits(proto.google.api.HttpRule, r.Message), i.DEBUG && !COMPILED && (proto.google.api.HttpRule.displayName = "proto.google.api.HttpRule"), proto.google.api.HttpRule.repeatedFields_ = [11], proto.google.api.HttpRule.oneofGroups_ = [
                            [2, 3, 4, 5, 6, 8]
                        ], proto.google.api.HttpRule.PatternCase = {
                            PATTERN_NOT_SET: 0,
                            GET: 2,
                            PUT: 3,
                            POST: 4,
                            DELETE: 5,
                            PATCH: 6,
                            CUSTOM: 8
                        }, proto.google.api.HttpRule.prototype.getPatternCase = function() {
                            return r.Message.computeOneofCase(this, proto.google.api.HttpRule.oneofGroups_[0])
                        }, r.Message.GENERATE_TO_OBJECT && (proto.google.api.HttpRule.prototype.toObject = function(e) {
                            return proto.google.api.HttpRule.toObject(e, this)
                        }, proto.google.api.HttpRule.toObject = function(e, t) {
                            var o = {
                                selector: r.Message.getFieldWithDefault(t, 1, ""),
                                get: r.Message.getFieldWithDefault(t, 2, ""),
                                put: r.Message.getFieldWithDefault(t, 3, ""),
                                post: r.Message.getFieldWithDefault(t, 4, ""),
                                pb_delete: r.Message.getFieldWithDefault(t, 5, ""),
                                patch: r.Message.getFieldWithDefault(t, 6, ""),
                                custom: (o = t.getCustom()) && proto.google.api.CustomHttpPattern.toObject(e, o),
                                body: r.Message.getFieldWithDefault(t, 7, ""),
                                responseBody: r.Message.getFieldWithDefault(t, 12, ""),
                                additionalBindingsList: r.Message.toObjectList(t.getAdditionalBindingsList(), proto.google.api.HttpRule.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.api.HttpRule.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.api.HttpRule;
                            return proto.google.api.HttpRule.deserializeBinaryFromReader(e, t)
                        }, proto.google.api.HttpRule.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setSelector(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setGet(o);
                                    break;
                                case 3:
                                    o = t.readString(), e.setPut(o);
                                    break;
                                case 4:
                                    o = t.readString(), e.setPost(o);
                                    break;
                                case 5:
                                    o = t.readString(), e.setDelete(o);
                                    break;
                                case 6:
                                    o = t.readString(), e.setPatch(o);
                                    break;
                                case 8:
                                    o = new proto.google.api.CustomHttpPattern, t.readMessage(o, proto.google.api.CustomHttpPattern.deserializeBinaryFromReader), e.setCustom(o);
                                    break;
                                case 7:
                                    o = t.readString(), e.setBody(o);
                                    break;
                                case 12:
                                    o = t.readString(), e.setResponseBody(o);
                                    break;
                                case 11:
                                    o = new proto.google.api.HttpRule, t.readMessage(o, proto.google.api.HttpRule.deserializeBinaryFromReader), e.addAdditionalBindings(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.api.HttpRule.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.api.HttpRule.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.api.HttpRule.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getSelector()).length && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), null != (o = r.Message.getField(e, 3)) && t.writeString(3, o), null != (o = r.Message.getField(e, 4)) && t.writeString(4, o), null != (o = r.Message.getField(e, 5)) && t.writeString(5, o), null != (o = r.Message.getField(e, 6)) && t.writeString(6, o), null != (o = e.getCustom()) && t.writeMessage(8, o, proto.google.api.CustomHttpPattern.serializeBinaryToWriter), 0 < (o = e.getBody()).length && t.writeString(7, o), 0 < (o = e.getResponseBody()).length && t.writeString(12, o), 0 < (o = e.getAdditionalBindingsList()).length && t.writeRepeatedMessage(11, o, proto.google.api.HttpRule.serializeBinaryToWriter)
                        }, proto.google.api.HttpRule.prototype.getSelector = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.api.HttpRule.prototype.setSelector = function(e) {
                            r.Message.setProto3StringField(this, 1, e)
                        }, proto.google.api.HttpRule.prototype.getGet = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.api.HttpRule.prototype.setGet = function(e) {
                            r.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearGet = function() {
                            r.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], void 0)
                        }, proto.google.api.HttpRule.prototype.hasGet = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.api.HttpRule.prototype.getPut = function() {
                            return r.Message.getFieldWithDefault(this, 3, "")
                        }, proto.google.api.HttpRule.prototype.setPut = function(e) {
                            r.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearPut = function() {
                            r.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], void 0)
                        }, proto.google.api.HttpRule.prototype.hasPut = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.api.HttpRule.prototype.getPost = function() {
                            return r.Message.getFieldWithDefault(this, 4, "")
                        }, proto.google.api.HttpRule.prototype.setPost = function(e) {
                            r.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearPost = function() {
                            r.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], void 0)
                        }, proto.google.api.HttpRule.prototype.hasPost = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.api.HttpRule.prototype.getDelete = function() {
                            return r.Message.getFieldWithDefault(this, 5, "")
                        }, proto.google.api.HttpRule.prototype.setDelete = function(e) {
                            r.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearDelete = function() {
                            r.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], void 0)
                        }, proto.google.api.HttpRule.prototype.hasDelete = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.google.api.HttpRule.prototype.getPatch = function() {
                            return r.Message.getFieldWithDefault(this, 6, "")
                        }, proto.google.api.HttpRule.prototype.setPatch = function(e) {
                            r.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearPatch = function() {
                            r.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], void 0)
                        }, proto.google.api.HttpRule.prototype.hasPatch = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.google.api.HttpRule.prototype.getCustom = function() {
                            return r.Message.getWrapperField(this, proto.google.api.CustomHttpPattern, 8)
                        }, proto.google.api.HttpRule.prototype.setCustom = function(e) {
                            r.Message.setOneofWrapperField(this, 8, proto.google.api.HttpRule.oneofGroups_[0], e)
                        }, proto.google.api.HttpRule.prototype.clearCustom = function() {
                            this.setCustom(void 0)
                        }, proto.google.api.HttpRule.prototype.hasCustom = function() {
                            return null != r.Message.getField(this, 8)
                        }, proto.google.api.HttpRule.prototype.getBody = function() {
                            return r.Message.getFieldWithDefault(this, 7, "")
                        }, proto.google.api.HttpRule.prototype.setBody = function(e) {
                            r.Message.setProto3StringField(this, 7, e)
                        }, proto.google.api.HttpRule.prototype.getResponseBody = function() {
                            return r.Message.getFieldWithDefault(this, 12, "")
                        }, proto.google.api.HttpRule.prototype.setResponseBody = function(e) {
                            r.Message.setProto3StringField(this, 12, e)
                        }, proto.google.api.HttpRule.prototype.getAdditionalBindingsList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 11)
                        }, proto.google.api.HttpRule.prototype.setAdditionalBindingsList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 11, e)
                        }, proto.google.api.HttpRule.prototype.addAdditionalBindings = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 11, e, proto.google.api.HttpRule, t)
                        }, proto.google.api.HttpRule.prototype.clearAdditionalBindingsList = function() {
                            this.setAdditionalBindingsList([])
                        }, proto.google.api.CustomHttpPattern = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.api.CustomHttpPattern, r.Message), i.DEBUG && !COMPILED && (proto.google.api.CustomHttpPattern.displayName = "proto.google.api.CustomHttpPattern"), r.Message.GENERATE_TO_OBJECT && (proto.google.api.CustomHttpPattern.prototype.toObject = function(e) {
                            return proto.google.api.CustomHttpPattern.toObject(e, this)
                        }, proto.google.api.CustomHttpPattern.toObject = function(e, t) {
                            var o = {
                                kind: r.Message.getFieldWithDefault(t, 1, ""),
                                path: r.Message.getFieldWithDefault(t, 2, "")
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.api.CustomHttpPattern.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.api.CustomHttpPattern;
                            return proto.google.api.CustomHttpPattern.deserializeBinaryFromReader(e, t)
                        }, proto.google.api.CustomHttpPattern.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setKind(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setPath(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.api.CustomHttpPattern.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.api.CustomHttpPattern.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.api.CustomHttpPattern.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getKind()).length && t.writeString(1, o), 0 < (o = e.getPath()).length && t.writeString(2, o)
                        }, proto.google.api.CustomHttpPattern.prototype.getKind = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.api.CustomHttpPattern.prototype.setKind = function(e) {
                            r.Message.setProto3StringField(this, 1, e)
                        }, proto.google.api.CustomHttpPattern.prototype.getPath = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.api.CustomHttpPattern.prototype.setPath = function(e) {
                            r.Message.setProto3StringField(this, 2, e)
                        }, i.object.extend(t, proto.google.api)
                    }, function(e, t, o) {
                        var r = o(6),
                            i = r,
                            o = Function("return this")();
                        i.exportSymbol("proto.google.protobuf.DescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.DescriptorProto.ExtensionRange", null, o), i.exportSymbol("proto.google.protobuf.DescriptorProto.ReservedRange", null, o), i.exportSymbol("proto.google.protobuf.EnumDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.EnumDescriptorProto.EnumReservedRange", null, o), i.exportSymbol("proto.google.protobuf.EnumOptions", null, o), i.exportSymbol("proto.google.protobuf.EnumValueDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.EnumValueOptions", null, o), i.exportSymbol("proto.google.protobuf.ExtensionRangeOptions", null, o), i.exportSymbol("proto.google.protobuf.FieldDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.FieldDescriptorProto.Label", null, o), i.exportSymbol("proto.google.protobuf.FieldDescriptorProto.Type", null, o), i.exportSymbol("proto.google.protobuf.FieldOptions", null, o), i.exportSymbol("proto.google.protobuf.FieldOptions.CType", null, o), i.exportSymbol("proto.google.protobuf.FieldOptions.JSType", null, o), i.exportSymbol("proto.google.protobuf.FileDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.FileDescriptorSet", null, o), i.exportSymbol("proto.google.protobuf.FileOptions", null, o), i.exportSymbol("proto.google.protobuf.FileOptions.OptimizeMode", null, o), i.exportSymbol("proto.google.protobuf.GeneratedCodeInfo", null, o), i.exportSymbol("proto.google.protobuf.GeneratedCodeInfo.Annotation", null, o), i.exportSymbol("proto.google.protobuf.MessageOptions", null, o), i.exportSymbol("proto.google.protobuf.MethodDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.MethodOptions", null, o), i.exportSymbol("proto.google.protobuf.MethodOptions.IdempotencyLevel", null, o), i.exportSymbol("proto.google.protobuf.OneofDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.OneofOptions", null, o), i.exportSymbol("proto.google.protobuf.ServiceDescriptorProto", null, o), i.exportSymbol("proto.google.protobuf.ServiceOptions", null, o), i.exportSymbol("proto.google.protobuf.SourceCodeInfo", null, o), i.exportSymbol("proto.google.protobuf.SourceCodeInfo.Location", null, o), i.exportSymbol("proto.google.protobuf.UninterpretedOption", null, o), i.exportSymbol("proto.google.protobuf.UninterpretedOption.NamePart", null, o), proto.google.protobuf.FileDescriptorSet = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.FileDescriptorSet.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.FileDescriptorSet, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.FileDescriptorSet.displayName = "proto.google.protobuf.FileDescriptorSet"), proto.google.protobuf.FileDescriptorSet.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileDescriptorSet.prototype.toObject = function(e) {
                            return proto.google.protobuf.FileDescriptorSet.toObject(e, this)
                        }, proto.google.protobuf.FileDescriptorSet.toObject = function(e, t) {
                            var o = {
                                fileList: r.Message.toObjectList(t.getFileList(), proto.google.protobuf.FileDescriptorProto.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.FileDescriptorSet.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.FileDescriptorSet;
                            return proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                1 === t.getFieldNumber() ? (o = new proto.google.protobuf.FileDescriptorProto, t.readMessage(o, proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader), e.addFile(o)) : t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.FileDescriptorSet.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter = function(e, t) {
                            0 < (e = e.getFileList()).length && t.writeRepeatedMessage(1, e, proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter)
                        }, proto.google.protobuf.FileDescriptorSet.prototype.getFileList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 1)
                        }, proto.google.protobuf.FileDescriptorSet.prototype.setFileList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 1, e)
                        }, proto.google.protobuf.FileDescriptorSet.prototype.addFile = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.FileDescriptorProto, t)
                        }, proto.google.protobuf.FileDescriptorSet.prototype.clearFileList = function() {
                            this.setFileList([])
                        }, proto.google.protobuf.FileDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.FileDescriptorProto.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.FileDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.FileDescriptorProto.displayName = "proto.google.protobuf.FileDescriptorProto"), proto.google.protobuf.FileDescriptorProto.repeatedFields_ = [3, 10, 11, 4, 5, 6, 7], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.FileDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.FileDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                pb_package: r.Message.getField(t, 2),
                                dependencyList: r.Message.getRepeatedField(t, 3),
                                publicDependencyList: r.Message.getRepeatedField(t, 10),
                                weakDependencyList: r.Message.getRepeatedField(t, 11),
                                messageTypeList: r.Message.toObjectList(t.getMessageTypeList(), proto.google.protobuf.DescriptorProto.toObject, e),
                                enumTypeList: r.Message.toObjectList(t.getEnumTypeList(), proto.google.protobuf.EnumDescriptorProto.toObject, e),
                                serviceList: r.Message.toObjectList(t.getServiceList(), proto.google.protobuf.ServiceDescriptorProto.toObject, e),
                                extensionList: r.Message.toObjectList(t.getExtensionList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                                options: (o = t.getOptions()) && proto.google.protobuf.FileOptions.toObject(e, o),
                                sourceCodeInfo: (o = t.getSourceCodeInfo()) && proto.google.protobuf.SourceCodeInfo.toObject(e, o),
                                syntax: r.Message.getField(t, 12)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.FileDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.FileDescriptorProto;
                            return proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setPackage(o);
                                    break;
                                case 3:
                                    o = t.readString(), e.addDependency(o);
                                    break;
                                case 10:
                                    o = t.readInt32(), e.addPublicDependency(o);
                                    break;
                                case 11:
                                    o = t.readInt32(), e.addWeakDependency(o);
                                    break;
                                case 4:
                                    o = new proto.google.protobuf.DescriptorProto, t.readMessage(o, proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader), e.addMessageType(o);
                                    break;
                                case 5:
                                    o = new proto.google.protobuf.EnumDescriptorProto, t.readMessage(o, proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader), e.addEnumType(o);
                                    break;
                                case 6:
                                    o = new proto.google.protobuf.ServiceDescriptorProto, t.readMessage(o, proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader), e.addService(o);
                                    break;
                                case 7:
                                    o = new proto.google.protobuf.FieldDescriptorProto, t.readMessage(o, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addExtension$(o);
                                    break;
                                case 8:
                                    o = new proto.google.protobuf.FileOptions, t.readMessage(o, proto.google.protobuf.FileOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                case 9:
                                    o = new proto.google.protobuf.SourceCodeInfo, t.readMessage(o, proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader), e.setSourceCodeInfo(o);
                                    break;
                                case 12:
                                    o = t.readString(), e.setSyntax(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.FileDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), 0 < (o = e.getDependencyList()).length && t.writeRepeatedString(3, o), 0 < (o = e.getPublicDependencyList()).length && t.writeRepeatedInt32(10, o), 0 < (o = e.getWeakDependencyList()).length && t.writeRepeatedInt32(11, o), 0 < (o = e.getMessageTypeList()).length && t.writeRepeatedMessage(4, o, proto.google.protobuf.DescriptorProto.serializeBinaryToWriter), 0 < (o = e.getEnumTypeList()).length && t.writeRepeatedMessage(5, o, proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter), 0 < (o = e.getServiceList()).length && t.writeRepeatedMessage(6, o, proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter), 0 < (o = e.getExtensionList()).length && t.writeRepeatedMessage(7, o, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), null != (o = e.getOptions()) && t.writeMessage(8, o, proto.google.protobuf.FileOptions.serializeBinaryToWriter), null != (o = e.getSourceCodeInfo()) && t.writeMessage(9, o, proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter), null != (o = r.Message.getField(e, 12)) && t.writeString(12, o)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getPackage = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setPackage = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearPackage = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.hasPackage = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getDependencyList = function() {
                            return r.Message.getRepeatedField(this, 3)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setDependencyList = function(e) {
                            r.Message.setField(this, 3, e || [])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addDependency = function(e, t) {
                            r.Message.addToRepeatedField(this, 3, e, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearDependencyList = function() {
                            this.setDependencyList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getPublicDependencyList = function() {
                            return r.Message.getRepeatedField(this, 10)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setPublicDependencyList = function(e) {
                            r.Message.setField(this, 10, e || [])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addPublicDependency = function(e, t) {
                            r.Message.addToRepeatedField(this, 10, e, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearPublicDependencyList = function() {
                            this.setPublicDependencyList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getWeakDependencyList = function() {
                            return r.Message.getRepeatedField(this, 11)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setWeakDependencyList = function(e) {
                            r.Message.setField(this, 11, e || [])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addWeakDependency = function(e, t) {
                            r.Message.addToRepeatedField(this, 11, e, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearWeakDependencyList = function() {
                            this.setWeakDependencyList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getMessageTypeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 4)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setMessageTypeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 4, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addMessageType = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.DescriptorProto, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearMessageTypeList = function() {
                            this.setMessageTypeList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getEnumTypeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 5)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setEnumTypeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 5, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addEnumType = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.google.protobuf.EnumDescriptorProto, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearEnumTypeList = function() {
                            this.setEnumTypeList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getServiceList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.ServiceDescriptorProto, 6)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setServiceList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 6, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addService = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.google.protobuf.ServiceDescriptorProto, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearServiceList = function() {
                            this.setServiceList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getExtensionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 7)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setExtensionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 7, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.addExtension$ = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 7, e, proto.google.protobuf.FieldDescriptorProto, t)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearExtensionList = function() {
                            this.setExtensionList([])
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.FileOptions, 8)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 8, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 8)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getSourceCodeInfo = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.SourceCodeInfo, 9)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setSourceCodeInfo = function(e) {
                            r.Message.setWrapperField(this, 9, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearSourceCodeInfo = function() {
                            this.setSourceCodeInfo(void 0)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.hasSourceCodeInfo = function() {
                            return null != r.Message.getField(this, 9)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.getSyntax = function() {
                            return r.Message.getFieldWithDefault(this, 12, "")
                        }, proto.google.protobuf.FileDescriptorProto.prototype.setSyntax = function(e) {
                            r.Message.setField(this, 12, e)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.clearSyntax = function() {
                            r.Message.setField(this, 12, void 0)
                        }, proto.google.protobuf.FileDescriptorProto.prototype.hasSyntax = function() {
                            return null != r.Message.getField(this, 12)
                        }, proto.google.protobuf.DescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.DescriptorProto.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.DescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.displayName = "proto.google.protobuf.DescriptorProto"), proto.google.protobuf.DescriptorProto.repeatedFields_ = [2, 6, 3, 4, 5, 8, 9, 10], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.DescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.DescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                fieldList: r.Message.toObjectList(t.getFieldList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                                extensionList: r.Message.toObjectList(t.getExtensionList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                                nestedTypeList: r.Message.toObjectList(t.getNestedTypeList(), proto.google.protobuf.DescriptorProto.toObject, e),
                                enumTypeList: r.Message.toObjectList(t.getEnumTypeList(), proto.google.protobuf.EnumDescriptorProto.toObject, e),
                                extensionRangeList: r.Message.toObjectList(t.getExtensionRangeList(), proto.google.protobuf.DescriptorProto.ExtensionRange.toObject, e),
                                oneofDeclList: r.Message.toObjectList(t.getOneofDeclList(), proto.google.protobuf.OneofDescriptorProto.toObject, e),
                                options: (o = t.getOptions()) && proto.google.protobuf.MessageOptions.toObject(e, o),
                                reservedRangeList: r.Message.toObjectList(t.getReservedRangeList(), proto.google.protobuf.DescriptorProto.ReservedRange.toObject, e),
                                reservedNameList: r.Message.getRepeatedField(t, 10)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.DescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.DescriptorProto;
                            return proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = new proto.google.protobuf.FieldDescriptorProto, t.readMessage(o, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addField(o);
                                    break;
                                case 6:
                                    o = new proto.google.protobuf.FieldDescriptorProto, t.readMessage(o, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addExtension$(o);
                                    break;
                                case 3:
                                    o = new proto.google.protobuf.DescriptorProto, t.readMessage(o, proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader), e.addNestedType(o);
                                    break;
                                case 4:
                                    o = new proto.google.protobuf.EnumDescriptorProto, t.readMessage(o, proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader), e.addEnumType(o);
                                    break;
                                case 5:
                                    o = new proto.google.protobuf.DescriptorProto.ExtensionRange, t.readMessage(o, proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader), e.addExtensionRange(o);
                                    break;
                                case 8:
                                    o = new proto.google.protobuf.OneofDescriptorProto, t.readMessage(o, proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader), e.addOneofDecl(o);
                                    break;
                                case 7:
                                    o = new proto.google.protobuf.MessageOptions, t.readMessage(o, proto.google.protobuf.MessageOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                case 9:
                                    o = new proto.google.protobuf.DescriptorProto.ReservedRange, t.readMessage(o, proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader), e.addReservedRange(o);
                                    break;
                                case 10:
                                    o = t.readString(), e.addReservedName(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.DescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.DescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.DescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), 0 < (o = e.getFieldList()).length && t.writeRepeatedMessage(2, o, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), 0 < (o = e.getExtensionList()).length && t.writeRepeatedMessage(6, o, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), 0 < (o = e.getNestedTypeList()).length && t.writeRepeatedMessage(3, o, proto.google.protobuf.DescriptorProto.serializeBinaryToWriter), 0 < (o = e.getEnumTypeList()).length && t.writeRepeatedMessage(4, o, proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter), 0 < (o = e.getExtensionRangeList()).length && t.writeRepeatedMessage(5, o, proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter), 0 < (o = e.getOneofDeclList()).length && t.writeRepeatedMessage(8, o, proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter), null != (o = e.getOptions()) && t.writeMessage(7, o, proto.google.protobuf.MessageOptions.serializeBinaryToWriter), 0 < (o = e.getReservedRangeList()).length && t.writeRepeatedMessage(9, o, proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter), 0 < (o = e.getReservedNameList()).length && t.writeRepeatedString(10, o)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.DescriptorProto.ExtensionRange, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.ExtensionRange.displayName = "proto.google.protobuf.DescriptorProto.ExtensionRange"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.toObject = function(e) {
                            return proto.google.protobuf.DescriptorProto.ExtensionRange.toObject(e, this)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.toObject = function(e, t) {
                            var o = {
                                start: r.Message.getField(t, 1),
                                end: r.Message.getField(t, 2),
                                options: (o = t.getOptions()) && proto.google.protobuf.ExtensionRangeOptions.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.DescriptorProto.ExtensionRange;
                            return proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readInt32();
                                    e.setStart(o);
                                    break;
                                case 2:
                                    o = t.readInt32(), e.setEnd(o);
                                    break;
                                case 3:
                                    o = new proto.google.protobuf.ExtensionRangeOptions, t.readMessage(o, proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeInt32(1, o), null != (o = r.Message.getField(e, 2)) && t.writeInt32(2, o), null != (o = e.getOptions()) && t.writeMessage(3, o, proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getStart = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setStart = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearStart = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasStart = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getEnd = function() {
                            return r.Message.getFieldWithDefault(this, 2, 0)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setEnd = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearEnd = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasEnd = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.ExtensionRangeOptions, 3)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 3, e)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.DescriptorProto.ReservedRange, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.ReservedRange.displayName = "proto.google.protobuf.DescriptorProto.ReservedRange"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.ReservedRange.prototype.toObject = function(e) {
                            return proto.google.protobuf.DescriptorProto.ReservedRange.toObject(e, this)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.toObject = function(e, t) {
                            var o = {
                                start: r.Message.getField(t, 1),
                                end: r.Message.getField(t, 2)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.DescriptorProto.ReservedRange;
                            return proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readInt32();
                                    e.setStart(o);
                                    break;
                                case 2:
                                    o = t.readInt32(), e.setEnd(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeInt32(1, o), null != (o = r.Message.getField(e, 2)) && t.writeInt32(2, o)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getStart = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setStart = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearStart = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasStart = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getEnd = function() {
                            return r.Message.getFieldWithDefault(this, 2, 0)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setEnd = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearEnd = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasEnd = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.DescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.DescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.DescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.DescriptorProto.prototype.getFieldList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 2)
                        }, proto.google.protobuf.DescriptorProto.prototype.setFieldList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 2, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addField = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.FieldDescriptorProto, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearFieldList = function() {
                            this.setFieldList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getExtensionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 6)
                        }, proto.google.protobuf.DescriptorProto.prototype.setExtensionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 6, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addExtension$ = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.google.protobuf.FieldDescriptorProto, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearExtensionList = function() {
                            this.setExtensionList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getNestedTypeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 3)
                        }, proto.google.protobuf.DescriptorProto.prototype.setNestedTypeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 3, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addNestedType = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.google.protobuf.DescriptorProto, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearNestedTypeList = function() {
                            this.setNestedTypeList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getEnumTypeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 4)
                        }, proto.google.protobuf.DescriptorProto.prototype.setEnumTypeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 4, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addEnumType = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.EnumDescriptorProto, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearEnumTypeList = function() {
                            this.setEnumTypeList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getExtensionRangeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ExtensionRange, 5)
                        }, proto.google.protobuf.DescriptorProto.prototype.setExtensionRangeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 5, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addExtensionRange = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.google.protobuf.DescriptorProto.ExtensionRange, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearExtensionRangeList = function() {
                            this.setExtensionRangeList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getOneofDeclList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.OneofDescriptorProto, 8)
                        }, proto.google.protobuf.DescriptorProto.prototype.setOneofDeclList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 8, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addOneofDecl = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 8, e, proto.google.protobuf.OneofDescriptorProto, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearOneofDeclList = function() {
                            this.setOneofDeclList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.MessageOptions, 7)
                        }, proto.google.protobuf.DescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 7, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.DescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 7)
                        }, proto.google.protobuf.DescriptorProto.prototype.getReservedRangeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ReservedRange, 9)
                        }, proto.google.protobuf.DescriptorProto.prototype.setReservedRangeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 9, e)
                        }, proto.google.protobuf.DescriptorProto.prototype.addReservedRange = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 9, e, proto.google.protobuf.DescriptorProto.ReservedRange, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearReservedRangeList = function() {
                            this.setReservedRangeList([])
                        }, proto.google.protobuf.DescriptorProto.prototype.getReservedNameList = function() {
                            return r.Message.getRepeatedField(this, 10)
                        }, proto.google.protobuf.DescriptorProto.prototype.setReservedNameList = function(e) {
                            r.Message.setField(this, 10, e || [])
                        }, proto.google.protobuf.DescriptorProto.prototype.addReservedName = function(e, t) {
                            r.Message.addToRepeatedField(this, 10, e, t)
                        }, proto.google.protobuf.DescriptorProto.prototype.clearReservedNameList = function() {
                            this.setReservedNameList([])
                        }, proto.google.protobuf.ExtensionRangeOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.ExtensionRangeOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.ExtensionRangeOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.ExtensionRangeOptions.displayName = "proto.google.protobuf.ExtensionRangeOptions"), proto.google.protobuf.ExtensionRangeOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ExtensionRangeOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.ExtensionRangeOptions.toObject(e, this)
                        }, proto.google.protobuf.ExtensionRangeOptions.toObject = function(e, t) {
                            var o = {
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.ExtensionRangeOptions.extensions, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.ExtensionRangeOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.ExtensionRangeOptions;
                            return proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                999 === t.getFieldNumber() ? (o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o)) : r.Message.readBinaryExtension(e, t, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension, proto.google.protobuf.ExtensionRangeOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.ExtensionRangeOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter = function(e, t) {
                            var o;
                            0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension)
                        }, proto.google.protobuf.ExtensionRangeOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.ExtensionRangeOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.ExtensionRangeOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.ExtensionRangeOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.ExtensionRangeOptions.extensions = {}, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary = {}, proto.google.protobuf.FieldDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.FieldDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.FieldDescriptorProto.displayName = "proto.google.protobuf.FieldDescriptorProto"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FieldDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.FieldDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.FieldDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                number: r.Message.getField(t, 3),
                                label: r.Message.getField(t, 4),
                                type: r.Message.getField(t, 5),
                                typeName: r.Message.getField(t, 6),
                                extendee: r.Message.getField(t, 2),
                                defaultValue: r.Message.getField(t, 7),
                                oneofIndex: r.Message.getField(t, 9),
                                jsonName: r.Message.getField(t, 10),
                                options: (o = t.getOptions()) && proto.google.protobuf.FieldOptions.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.FieldDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.FieldDescriptorProto;
                            return proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 3:
                                    o = t.readInt32(), e.setNumber(o);
                                    break;
                                case 4:
                                    o = t.readEnum(), e.setLabel(o);
                                    break;
                                case 5:
                                    o = t.readEnum(), e.setType(o);
                                    break;
                                case 6:
                                    o = t.readString(), e.setTypeName(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setExtendee(o);
                                    break;
                                case 7:
                                    o = t.readString(), e.setDefaultValue(o);
                                    break;
                                case 9:
                                    o = t.readInt32(), e.setOneofIndex(o);
                                    break;
                                case 10:
                                    o = t.readString(), e.setJsonName(o);
                                    break;
                                case 8:
                                    o = new proto.google.protobuf.FieldOptions, t.readMessage(o, proto.google.protobuf.FieldOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 3)) && t.writeInt32(3, o), null != (o = r.Message.getField(e, 4)) && t.writeEnum(4, o), null != (o = r.Message.getField(e, 5)) && t.writeEnum(5, o), null != (o = r.Message.getField(e, 6)) && t.writeString(6, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), null != (o = r.Message.getField(e, 7)) && t.writeString(7, o), null != (o = r.Message.getField(e, 9)) && t.writeInt32(9, o), null != (o = r.Message.getField(e, 10)) && t.writeString(10, o), null != (o = e.getOptions()) && t.writeMessage(8, o, proto.google.protobuf.FieldOptions.serializeBinaryToWriter)
                        }, proto.google.protobuf.FieldDescriptorProto.Type = {
                            TYPE_DOUBLE: 1,
                            TYPE_FLOAT: 2,
                            TYPE_INT64: 3,
                            TYPE_UINT64: 4,
                            TYPE_INT32: 5,
                            TYPE_FIXED64: 6,
                            TYPE_FIXED32: 7,
                            TYPE_BOOL: 8,
                            TYPE_STRING: 9,
                            TYPE_GROUP: 10,
                            TYPE_MESSAGE: 11,
                            TYPE_BYTES: 12,
                            TYPE_UINT32: 13,
                            TYPE_ENUM: 14,
                            TYPE_SFIXED32: 15,
                            TYPE_SFIXED64: 16,
                            TYPE_SINT32: 17,
                            TYPE_SINT64: 18
                        }, proto.google.protobuf.FieldDescriptorProto.Label = {
                            LABEL_OPTIONAL: 1,
                            LABEL_REQUIRED: 2,
                            LABEL_REPEATED: 3
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getNumber = function() {
                            return r.Message.getFieldWithDefault(this, 3, 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setNumber = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearNumber = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasNumber = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getLabel = function() {
                            return r.Message.getFieldWithDefault(this, 4, 1)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setLabel = function(e) {
                            r.Message.setField(this, 4, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearLabel = function() {
                            r.Message.setField(this, 4, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasLabel = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getType = function() {
                            return r.Message.getFieldWithDefault(this, 5, 1)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setType = function(e) {
                            r.Message.setField(this, 5, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearType = function() {
                            r.Message.setField(this, 5, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasType = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getTypeName = function() {
                            return r.Message.getFieldWithDefault(this, 6, "")
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setTypeName = function(e) {
                            r.Message.setField(this, 6, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearTypeName = function() {
                            r.Message.setField(this, 6, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasTypeName = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getExtendee = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setExtendee = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearExtendee = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasExtendee = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getDefaultValue = function() {
                            return r.Message.getFieldWithDefault(this, 7, "")
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setDefaultValue = function(e) {
                            r.Message.setField(this, 7, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearDefaultValue = function() {
                            r.Message.setField(this, 7, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasDefaultValue = function() {
                            return null != r.Message.getField(this, 7)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getOneofIndex = function() {
                            return r.Message.getFieldWithDefault(this, 9, 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setOneofIndex = function(e) {
                            r.Message.setField(this, 9, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearOneofIndex = function() {
                            r.Message.setField(this, 9, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasOneofIndex = function() {
                            return null != r.Message.getField(this, 9)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getJsonName = function() {
                            return r.Message.getFieldWithDefault(this, 10, "")
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setJsonName = function(e) {
                            r.Message.setField(this, 10, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearJsonName = function() {
                            r.Message.setField(this, 10, void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasJsonName = function() {
                            return null != r.Message.getField(this, 10)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.FieldOptions, 8)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 8, e)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.FieldDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 8)
                        }, proto.google.protobuf.OneofDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.OneofDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.OneofDescriptorProto.displayName = "proto.google.protobuf.OneofDescriptorProto"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.OneofDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.OneofDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.OneofDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                options: (o = t.getOptions()) && proto.google.protobuf.OneofOptions.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.OneofDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.OneofDescriptorProto;
                            return proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = new proto.google.protobuf.OneofOptions, t.readMessage(o, proto.google.protobuf.OneofOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = e.getOptions()) && t.writeMessage(2, o, proto.google.protobuf.OneofOptions.serializeBinaryToWriter)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.OneofOptions, 2)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 2, e)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.OneofDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.EnumDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.EnumDescriptorProto.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.EnumDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.EnumDescriptorProto.displayName = "proto.google.protobuf.EnumDescriptorProto"), proto.google.protobuf.EnumDescriptorProto.repeatedFields_ = [2, 4, 5], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.EnumDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.EnumDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                valueList: r.Message.toObjectList(t.getValueList(), proto.google.protobuf.EnumValueDescriptorProto.toObject, e),
                                options: (o = t.getOptions()) && proto.google.protobuf.EnumOptions.toObject(e, o),
                                reservedRangeList: r.Message.toObjectList(t.getReservedRangeList(), proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject, e),
                                reservedNameList: r.Message.getRepeatedField(t, 5)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.EnumDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.EnumDescriptorProto;
                            return proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = new proto.google.protobuf.EnumValueDescriptorProto, t.readMessage(o, proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader), e.addValue(o);
                                    break;
                                case 3:
                                    o = new proto.google.protobuf.EnumOptions, t.readMessage(o, proto.google.protobuf.EnumOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                case 4:
                                    o = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, t.readMessage(o, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader), e.addReservedRange(o);
                                    break;
                                case 5:
                                    o = t.readString(), e.addReservedName(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), 0 < (o = e.getValueList()).length && t.writeRepeatedMessage(2, o, proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter), null != (o = e.getOptions()) && t.writeMessage(3, o, proto.google.protobuf.EnumOptions.serializeBinaryToWriter), 0 < (o = e.getReservedRangeList()).length && t.writeRepeatedMessage(4, o, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter), 0 < (o = e.getReservedNameList()).length && t.writeRepeatedString(5, o)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.displayName = "proto.google.protobuf.EnumDescriptorProto.EnumReservedRange"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.toObject = function(e) {
                            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(e, this)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject = function(e, t) {
                            var o = {
                                start: r.Message.getField(t, 1),
                                end: r.Message.getField(t, 2)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
                            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readInt32();
                                    e.setStart(o);
                                    break;
                                case 2:
                                    o = t.readInt32(), e.setEnd(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeInt32(1, o), null != (o = r.Message.getField(e, 2)) && t.writeInt32(2, o)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getStart = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setStart = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearStart = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasStart = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getEnd = function() {
                            return r.Message.getFieldWithDefault(this, 2, 0)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setEnd = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearEnd = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasEnd = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.getValueList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValueDescriptorProto, 2)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.setValueList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 2, e)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.addValue = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.EnumValueDescriptorProto, t)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.clearValueList = function() {
                            this.setValueList([])
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.EnumOptions, 3)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 3, e)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.getReservedRangeList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, 4)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.setReservedRangeList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 4, e)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.addReservedRange = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, t)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedRangeList = function() {
                            this.setReservedRangeList([])
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.getReservedNameList = function() {
                            return r.Message.getRepeatedField(this, 5)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.setReservedNameList = function(e) {
                            r.Message.setField(this, 5, e || [])
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.addReservedName = function(e, t) {
                            r.Message.addToRepeatedField(this, 5, e, t)
                        }, proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedNameList = function() {
                            this.setReservedNameList([])
                        }, proto.google.protobuf.EnumValueDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.EnumValueDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.EnumValueDescriptorProto.displayName = "proto.google.protobuf.EnumValueDescriptorProto"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumValueDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.EnumValueDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.EnumValueDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                number: r.Message.getField(t, 2),
                                options: (o = t.getOptions()) && proto.google.protobuf.EnumValueOptions.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.EnumValueDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.EnumValueDescriptorProto;
                            return proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = t.readInt32(), e.setNumber(o);
                                    break;
                                case 3:
                                    o = new proto.google.protobuf.EnumValueOptions, t.readMessage(o, proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeInt32(2, o), null != (o = e.getOptions()) && t.writeMessage(3, o, proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.getNumber = function() {
                            return r.Message.getFieldWithDefault(this, 2, 0)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.setNumber = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.clearNumber = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.hasNumber = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.EnumValueOptions, 3)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 3, e)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.EnumValueDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.ServiceDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.ServiceDescriptorProto.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.ServiceDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.ServiceDescriptorProto.displayName = "proto.google.protobuf.ServiceDescriptorProto"), proto.google.protobuf.ServiceDescriptorProto.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ServiceDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.ServiceDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.ServiceDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                methodList: r.Message.toObjectList(t.getMethodList(), proto.google.protobuf.MethodDescriptorProto.toObject, e),
                                options: (o = t.getOptions()) && proto.google.protobuf.ServiceOptions.toObject(e, o)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.ServiceDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.ServiceDescriptorProto;
                            return proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = new proto.google.protobuf.MethodDescriptorProto, t.readMessage(o, proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader), e.addMethod(o);
                                    break;
                                case 3:
                                    o = new proto.google.protobuf.ServiceOptions, t.readMessage(o, proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), 0 < (o = e.getMethodList()).length && t.writeRepeatedMessage(2, o, proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter), null != (o = e.getOptions()) && t.writeMessage(3, o, proto.google.protobuf.ServiceOptions.serializeBinaryToWriter)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.getMethodList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.MethodDescriptorProto, 2)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.setMethodList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 2, e)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.addMethod = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.MethodDescriptorProto, t)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.clearMethodList = function() {
                            this.setMethodList([])
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.ServiceOptions, 3)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 3, e)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.ServiceDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.MethodDescriptorProto = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.MethodDescriptorProto, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.MethodDescriptorProto.displayName = "proto.google.protobuf.MethodDescriptorProto"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MethodDescriptorProto.prototype.toObject = function(e) {
                            return proto.google.protobuf.MethodDescriptorProto.toObject(e, this)
                        }, proto.google.protobuf.MethodDescriptorProto.toObject = function(e, t) {
                            var o = {
                                name: r.Message.getField(t, 1),
                                inputType: r.Message.getField(t, 2),
                                outputType: r.Message.getField(t, 3),
                                options: (o = t.getOptions()) && proto.google.protobuf.MethodOptions.toObject(e, o),
                                clientStreaming: r.Message.getFieldWithDefault(t, 5, !1),
                                serverStreaming: r.Message.getFieldWithDefault(t, 6, !1)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.MethodDescriptorProto.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.MethodDescriptorProto;
                            return proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setName(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setInputType(o);
                                    break;
                                case 3:
                                    o = t.readString(), e.setOutputType(o);
                                    break;
                                case 4:
                                    o = new proto.google.protobuf.MethodOptions, t.readMessage(o, proto.google.protobuf.MethodOptions.deserializeBinaryFromReader), e.setOptions(o);
                                    break;
                                case 5:
                                    o = t.readBool(), e.setClientStreaming(o);
                                    break;
                                case 6:
                                    o = t.readBool(), e.setServerStreaming(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), null != (o = r.Message.getField(e, 3)) && t.writeString(3, o), null != (o = e.getOptions()) && t.writeMessage(4, o, proto.google.protobuf.MethodOptions.serializeBinaryToWriter), null != (o = r.Message.getField(e, 5)) && t.writeBool(5, o), null != (o = r.Message.getField(e, 6)) && t.writeBool(6, o)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getName = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setName = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearName = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasName = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getInputType = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setInputType = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearInputType = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasInputType = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getOutputType = function() {
                            return r.Message.getFieldWithDefault(this, 3, "")
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setOutputType = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearOutputType = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasOutputType = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getOptions = function() {
                            return r.Message.getWrapperField(this, proto.google.protobuf.MethodOptions, 4)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setOptions = function(e) {
                            r.Message.setWrapperField(this, 4, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearOptions = function() {
                            this.setOptions(void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasOptions = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getClientStreaming = function() {
                            return r.Message.getFieldWithDefault(this, 5, !1)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setClientStreaming = function(e) {
                            r.Message.setField(this, 5, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearClientStreaming = function() {
                            r.Message.setField(this, 5, void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasClientStreaming = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.getServerStreaming = function() {
                            return r.Message.getFieldWithDefault(this, 6, !1)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.setServerStreaming = function(e) {
                            r.Message.setField(this, 6, e)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.clearServerStreaming = function() {
                            r.Message.setField(this, 6, void 0)
                        }, proto.google.protobuf.MethodDescriptorProto.prototype.hasServerStreaming = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.google.protobuf.FileOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.FileOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.FileOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.FileOptions.displayName = "proto.google.protobuf.FileOptions"), proto.google.protobuf.FileOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.FileOptions.toObject(e, this)
                        }, proto.google.protobuf.FileOptions.toObject = function(e, t) {
                            var o = {
                                javaPackage: r.Message.getField(t, 1),
                                javaOuterClassname: r.Message.getField(t, 8),
                                javaMultipleFiles: r.Message.getFieldWithDefault(t, 10, !1),
                                javaGenerateEqualsAndHash: r.Message.getField(t, 20),
                                javaStringCheckUtf8: r.Message.getFieldWithDefault(t, 27, !1),
                                optimizeFor: r.Message.getFieldWithDefault(t, 9, 1),
                                goPackage: r.Message.getField(t, 11),
                                ccGenericServices: r.Message.getFieldWithDefault(t, 16, !1),
                                javaGenericServices: r.Message.getFieldWithDefault(t, 17, !1),
                                pyGenericServices: r.Message.getFieldWithDefault(t, 18, !1),
                                phpGenericServices: r.Message.getFieldWithDefault(t, 42, !1),
                                deprecated: r.Message.getFieldWithDefault(t, 23, !1),
                                ccEnableArenas: r.Message.getFieldWithDefault(t, 31, !1),
                                objcClassPrefix: r.Message.getField(t, 36),
                                csharpNamespace: r.Message.getField(t, 37),
                                swiftPrefix: r.Message.getField(t, 39),
                                phpClassPrefix: r.Message.getField(t, 40),
                                phpNamespace: r.Message.getField(t, 41),
                                phpMetadataNamespace: r.Message.getField(t, 44),
                                rubyPackage: r.Message.getField(t, 45),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.FileOptions.extensions, proto.google.protobuf.FileOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.FileOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.FileOptions;
                            return proto.google.protobuf.FileOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.FileOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setJavaPackage(o);
                                    break;
                                case 8:
                                    o = t.readString(), e.setJavaOuterClassname(o);
                                    break;
                                case 10:
                                    o = t.readBool(), e.setJavaMultipleFiles(o);
                                    break;
                                case 20:
                                    o = t.readBool(), e.setJavaGenerateEqualsAndHash(o);
                                    break;
                                case 27:
                                    o = t.readBool(), e.setJavaStringCheckUtf8(o);
                                    break;
                                case 9:
                                    o = t.readEnum(), e.setOptimizeFor(o);
                                    break;
                                case 11:
                                    o = t.readString(), e.setGoPackage(o);
                                    break;
                                case 16:
                                    o = t.readBool(), e.setCcGenericServices(o);
                                    break;
                                case 17:
                                    o = t.readBool(), e.setJavaGenericServices(o);
                                    break;
                                case 18:
                                    o = t.readBool(), e.setPyGenericServices(o);
                                    break;
                                case 42:
                                    o = t.readBool(), e.setPhpGenericServices(o);
                                    break;
                                case 23:
                                    o = t.readBool(), e.setDeprecated(o);
                                    break;
                                case 31:
                                    o = t.readBool(), e.setCcEnableArenas(o);
                                    break;
                                case 36:
                                    o = t.readString(), e.setObjcClassPrefix(o);
                                    break;
                                case 37:
                                    o = t.readString(), e.setCsharpNamespace(o);
                                    break;
                                case 39:
                                    o = t.readString(), e.setSwiftPrefix(o);
                                    break;
                                case 40:
                                    o = t.readString(), e.setPhpClassPrefix(o);
                                    break;
                                case 41:
                                    o = t.readString(), e.setPhpNamespace(o);
                                    break;
                                case 44:
                                    o = t.readString(), e.setPhpMetadataNamespace(o);
                                    break;
                                case 45:
                                    o = t.readString(), e.setRubyPackage(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension, proto.google.protobuf.FileOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.FileOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.FileOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.FileOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 8)) && t.writeString(8, o), null != (o = r.Message.getField(e, 10)) && t.writeBool(10, o), null != (o = r.Message.getField(e, 20)) && t.writeBool(20, o), null != (o = r.Message.getField(e, 27)) && t.writeBool(27, o), null != (o = r.Message.getField(e, 9)) && t.writeEnum(9, o), null != (o = r.Message.getField(e, 11)) && t.writeString(11, o), null != (o = r.Message.getField(e, 16)) && t.writeBool(16, o), null != (o = r.Message.getField(e, 17)) && t.writeBool(17, o), null != (o = r.Message.getField(e, 18)) && t.writeBool(18, o), null != (o = r.Message.getField(e, 42)) && t.writeBool(42, o), null != (o = r.Message.getField(e, 23)) && t.writeBool(23, o), null != (o = r.Message.getField(e, 31)) && t.writeBool(31, o), null != (o = r.Message.getField(e, 36)) && t.writeString(36, o), null != (o = r.Message.getField(e, 37)) && t.writeString(37, o), null != (o = r.Message.getField(e, 39)) && t.writeString(39, o), null != (o = r.Message.getField(e, 40)) && t.writeString(40, o), null != (o = r.Message.getField(e, 41)) && t.writeString(41, o), null != (o = r.Message.getField(e, 44)) && t.writeString(44, o), null != (o = r.Message.getField(e, 45)) && t.writeString(45, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension)
                        }, proto.google.protobuf.FileOptions.OptimizeMode = {
                            SPEED: 1,
                            CODE_SIZE: 2,
                            LITE_RUNTIME: 3
                        }, proto.google.protobuf.FileOptions.prototype.getJavaPackage = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.FileOptions.prototype.setJavaPackage = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaPackage = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaPackage = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.FileOptions.prototype.getJavaOuterClassname = function() {
                            return r.Message.getFieldWithDefault(this, 8, "")
                        }, proto.google.protobuf.FileOptions.prototype.setJavaOuterClassname = function(e) {
                            r.Message.setField(this, 8, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaOuterClassname = function() {
                            r.Message.setField(this, 8, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaOuterClassname = function() {
                            return null != r.Message.getField(this, 8)
                        }, proto.google.protobuf.FileOptions.prototype.getJavaMultipleFiles = function() {
                            return r.Message.getFieldWithDefault(this, 10, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setJavaMultipleFiles = function(e) {
                            r.Message.setField(this, 10, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaMultipleFiles = function() {
                            r.Message.setField(this, 10, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaMultipleFiles = function() {
                            return null != r.Message.getField(this, 10)
                        }, proto.google.protobuf.FileOptions.prototype.getJavaGenerateEqualsAndHash = function() {
                            return r.Message.getFieldWithDefault(this, 20, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setJavaGenerateEqualsAndHash = function(e) {
                            r.Message.setField(this, 20, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaGenerateEqualsAndHash = function() {
                            r.Message.setField(this, 20, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaGenerateEqualsAndHash = function() {
                            return null != r.Message.getField(this, 20)
                        }, proto.google.protobuf.FileOptions.prototype.getJavaStringCheckUtf8 = function() {
                            return r.Message.getFieldWithDefault(this, 27, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setJavaStringCheckUtf8 = function(e) {
                            r.Message.setField(this, 27, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaStringCheckUtf8 = function() {
                            r.Message.setField(this, 27, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaStringCheckUtf8 = function() {
                            return null != r.Message.getField(this, 27)
                        }, proto.google.protobuf.FileOptions.prototype.getOptimizeFor = function() {
                            return r.Message.getFieldWithDefault(this, 9, 1)
                        }, proto.google.protobuf.FileOptions.prototype.setOptimizeFor = function(e) {
                            r.Message.setField(this, 9, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearOptimizeFor = function() {
                            r.Message.setField(this, 9, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasOptimizeFor = function() {
                            return null != r.Message.getField(this, 9)
                        }, proto.google.protobuf.FileOptions.prototype.getGoPackage = function() {
                            return r.Message.getFieldWithDefault(this, 11, "")
                        }, proto.google.protobuf.FileOptions.prototype.setGoPackage = function(e) {
                            r.Message.setField(this, 11, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearGoPackage = function() {
                            r.Message.setField(this, 11, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasGoPackage = function() {
                            return null != r.Message.getField(this, 11)
                        }, proto.google.protobuf.FileOptions.prototype.getCcGenericServices = function() {
                            return r.Message.getFieldWithDefault(this, 16, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setCcGenericServices = function(e) {
                            r.Message.setField(this, 16, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearCcGenericServices = function() {
                            r.Message.setField(this, 16, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasCcGenericServices = function() {
                            return null != r.Message.getField(this, 16)
                        }, proto.google.protobuf.FileOptions.prototype.getJavaGenericServices = function() {
                            return r.Message.getFieldWithDefault(this, 17, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setJavaGenericServices = function(e) {
                            r.Message.setField(this, 17, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearJavaGenericServices = function() {
                            r.Message.setField(this, 17, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasJavaGenericServices = function() {
                            return null != r.Message.getField(this, 17)
                        }, proto.google.protobuf.FileOptions.prototype.getPyGenericServices = function() {
                            return r.Message.getFieldWithDefault(this, 18, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setPyGenericServices = function(e) {
                            r.Message.setField(this, 18, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearPyGenericServices = function() {
                            r.Message.setField(this, 18, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasPyGenericServices = function() {
                            return null != r.Message.getField(this, 18)
                        }, proto.google.protobuf.FileOptions.prototype.getPhpGenericServices = function() {
                            return r.Message.getFieldWithDefault(this, 42, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setPhpGenericServices = function(e) {
                            r.Message.setField(this, 42, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearPhpGenericServices = function() {
                            r.Message.setField(this, 42, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasPhpGenericServices = function() {
                            return null != r.Message.getField(this, 42)
                        }, proto.google.protobuf.FileOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 23, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 23, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 23, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 23)
                        }, proto.google.protobuf.FileOptions.prototype.getCcEnableArenas = function() {
                            return r.Message.getFieldWithDefault(this, 31, !1)
                        }, proto.google.protobuf.FileOptions.prototype.setCcEnableArenas = function(e) {
                            r.Message.setField(this, 31, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearCcEnableArenas = function() {
                            r.Message.setField(this, 31, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasCcEnableArenas = function() {
                            return null != r.Message.getField(this, 31)
                        }, proto.google.protobuf.FileOptions.prototype.getObjcClassPrefix = function() {
                            return r.Message.getFieldWithDefault(this, 36, "")
                        }, proto.google.protobuf.FileOptions.prototype.setObjcClassPrefix = function(e) {
                            r.Message.setField(this, 36, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearObjcClassPrefix = function() {
                            r.Message.setField(this, 36, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasObjcClassPrefix = function() {
                            return null != r.Message.getField(this, 36)
                        }, proto.google.protobuf.FileOptions.prototype.getCsharpNamespace = function() {
                            return r.Message.getFieldWithDefault(this, 37, "")
                        }, proto.google.protobuf.FileOptions.prototype.setCsharpNamespace = function(e) {
                            r.Message.setField(this, 37, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearCsharpNamespace = function() {
                            r.Message.setField(this, 37, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasCsharpNamespace = function() {
                            return null != r.Message.getField(this, 37)
                        }, proto.google.protobuf.FileOptions.prototype.getSwiftPrefix = function() {
                            return r.Message.getFieldWithDefault(this, 39, "")
                        }, proto.google.protobuf.FileOptions.prototype.setSwiftPrefix = function(e) {
                            r.Message.setField(this, 39, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearSwiftPrefix = function() {
                            r.Message.setField(this, 39, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasSwiftPrefix = function() {
                            return null != r.Message.getField(this, 39)
                        }, proto.google.protobuf.FileOptions.prototype.getPhpClassPrefix = function() {
                            return r.Message.getFieldWithDefault(this, 40, "")
                        }, proto.google.protobuf.FileOptions.prototype.setPhpClassPrefix = function(e) {
                            r.Message.setField(this, 40, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearPhpClassPrefix = function() {
                            r.Message.setField(this, 40, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasPhpClassPrefix = function() {
                            return null != r.Message.getField(this, 40)
                        }, proto.google.protobuf.FileOptions.prototype.getPhpNamespace = function() {
                            return r.Message.getFieldWithDefault(this, 41, "")
                        }, proto.google.protobuf.FileOptions.prototype.setPhpNamespace = function(e) {
                            r.Message.setField(this, 41, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearPhpNamespace = function() {
                            r.Message.setField(this, 41, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasPhpNamespace = function() {
                            return null != r.Message.getField(this, 41)
                        }, proto.google.protobuf.FileOptions.prototype.getPhpMetadataNamespace = function() {
                            return r.Message.getFieldWithDefault(this, 44, "")
                        }, proto.google.protobuf.FileOptions.prototype.setPhpMetadataNamespace = function(e) {
                            r.Message.setField(this, 44, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearPhpMetadataNamespace = function() {
                            r.Message.setField(this, 44, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasPhpMetadataNamespace = function() {
                            return null != r.Message.getField(this, 44)
                        }, proto.google.protobuf.FileOptions.prototype.getRubyPackage = function() {
                            return r.Message.getFieldWithDefault(this, 45, "")
                        }, proto.google.protobuf.FileOptions.prototype.setRubyPackage = function(e) {
                            r.Message.setField(this, 45, e)
                        }, proto.google.protobuf.FileOptions.prototype.clearRubyPackage = function() {
                            r.Message.setField(this, 45, void 0)
                        }, proto.google.protobuf.FileOptions.prototype.hasRubyPackage = function() {
                            return null != r.Message.getField(this, 45)
                        }, proto.google.protobuf.FileOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.FileOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.FileOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.FileOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.FileOptions.extensions = {}, proto.google.protobuf.FileOptions.extensionsBinary = {}, proto.google.protobuf.MessageOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.MessageOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.MessageOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.MessageOptions.displayName = "proto.google.protobuf.MessageOptions"), proto.google.protobuf.MessageOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MessageOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.MessageOptions.toObject(e, this)
                        }, proto.google.protobuf.MessageOptions.toObject = function(e, t) {
                            var o = {
                                messageSetWireFormat: r.Message.getFieldWithDefault(t, 1, !1),
                                noStandardDescriptorAccessor: r.Message.getFieldWithDefault(t, 2, !1),
                                deprecated: r.Message.getFieldWithDefault(t, 3, !1),
                                mapEntry: r.Message.getField(t, 7),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.MessageOptions.extensions, proto.google.protobuf.MessageOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.MessageOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.MessageOptions;
                            return proto.google.protobuf.MessageOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.MessageOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readBool();
                                    e.setMessageSetWireFormat(o);
                                    break;
                                case 2:
                                    o = t.readBool(), e.setNoStandardDescriptorAccessor(o);
                                    break;
                                case 3:
                                    o = t.readBool(), e.setDeprecated(o);
                                    break;
                                case 7:
                                    o = t.readBool(), e.setMapEntry(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension, proto.google.protobuf.MessageOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.MessageOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.MessageOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.MessageOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeBool(1, o), null != (o = r.Message.getField(e, 2)) && t.writeBool(2, o), null != (o = r.Message.getField(e, 3)) && t.writeBool(3, o), null != (o = r.Message.getField(e, 7)) && t.writeBool(7, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension)
                        }, proto.google.protobuf.MessageOptions.prototype.getMessageSetWireFormat = function() {
                            return r.Message.getFieldWithDefault(this, 1, !1)
                        }, proto.google.protobuf.MessageOptions.prototype.setMessageSetWireFormat = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.MessageOptions.prototype.clearMessageSetWireFormat = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.MessageOptions.prototype.hasMessageSetWireFormat = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.MessageOptions.prototype.getNoStandardDescriptorAccessor = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.google.protobuf.MessageOptions.prototype.setNoStandardDescriptorAccessor = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.MessageOptions.prototype.clearNoStandardDescriptorAccessor = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.MessageOptions.prototype.hasNoStandardDescriptorAccessor = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.MessageOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 3, !1)
                        }, proto.google.protobuf.MessageOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.MessageOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.MessageOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.MessageOptions.prototype.getMapEntry = function() {
                            return r.Message.getFieldWithDefault(this, 7, !1)
                        }, proto.google.protobuf.MessageOptions.prototype.setMapEntry = function(e) {
                            r.Message.setField(this, 7, e)
                        }, proto.google.protobuf.MessageOptions.prototype.clearMapEntry = function() {
                            r.Message.setField(this, 7, void 0)
                        }, proto.google.protobuf.MessageOptions.prototype.hasMapEntry = function() {
                            return null != r.Message.getField(this, 7)
                        }, proto.google.protobuf.MessageOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.MessageOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.MessageOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.MessageOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.MessageOptions.extensions = {}, proto.google.protobuf.MessageOptions.extensionsBinary = {}, proto.google.protobuf.FieldOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.FieldOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.FieldOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.FieldOptions.displayName = "proto.google.protobuf.FieldOptions"), proto.google.protobuf.FieldOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FieldOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.FieldOptions.toObject(e, this)
                        }, proto.google.protobuf.FieldOptions.toObject = function(e, t) {
                            var o = {
                                ctype: r.Message.getFieldWithDefault(t, 1, 0),
                                packed: r.Message.getField(t, 2),
                                jstype: r.Message.getFieldWithDefault(t, 6, 0),
                                lazy: r.Message.getFieldWithDefault(t, 5, !1),
                                deprecated: r.Message.getFieldWithDefault(t, 3, !1),
                                weak: r.Message.getFieldWithDefault(t, 10, !1),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.FieldOptions.extensions, proto.google.protobuf.FieldOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.FieldOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.FieldOptions;
                            return proto.google.protobuf.FieldOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.FieldOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readEnum();
                                    e.setCtype(o);
                                    break;
                                case 2:
                                    o = t.readBool(), e.setPacked(o);
                                    break;
                                case 6:
                                    o = t.readEnum(), e.setJstype(o);
                                    break;
                                case 5:
                                    o = t.readBool(), e.setLazy(o);
                                    break;
                                case 3:
                                    o = t.readBool(), e.setDeprecated(o);
                                    break;
                                case 10:
                                    o = t.readBool(), e.setWeak(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension, proto.google.protobuf.FieldOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.FieldOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.FieldOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.FieldOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeEnum(1, o), null != (o = r.Message.getField(e, 2)) && t.writeBool(2, o), null != (o = r.Message.getField(e, 6)) && t.writeEnum(6, o), null != (o = r.Message.getField(e, 5)) && t.writeBool(5, o), null != (o = r.Message.getField(e, 3)) && t.writeBool(3, o), null != (o = r.Message.getField(e, 10)) && t.writeBool(10, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension)
                        }, proto.google.protobuf.FieldOptions.CType = {
                            STRING: 0,
                            CORD: 1,
                            STRING_PIECE: 2
                        }, proto.google.protobuf.FieldOptions.JSType = {
                            JS_NORMAL: 0,
                            JS_STRING: 1,
                            JS_NUMBER: 2
                        }, proto.google.protobuf.FieldOptions.prototype.getCtype = function() {
                            return r.Message.getFieldWithDefault(this, 1, 0)
                        }, proto.google.protobuf.FieldOptions.prototype.setCtype = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearCtype = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasCtype = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.FieldOptions.prototype.getPacked = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.google.protobuf.FieldOptions.prototype.setPacked = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearPacked = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasPacked = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.FieldOptions.prototype.getJstype = function() {
                            return r.Message.getFieldWithDefault(this, 6, 0)
                        }, proto.google.protobuf.FieldOptions.prototype.setJstype = function(e) {
                            r.Message.setField(this, 6, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearJstype = function() {
                            r.Message.setField(this, 6, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasJstype = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.google.protobuf.FieldOptions.prototype.getLazy = function() {
                            return r.Message.getFieldWithDefault(this, 5, !1)
                        }, proto.google.protobuf.FieldOptions.prototype.setLazy = function(e) {
                            r.Message.setField(this, 5, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearLazy = function() {
                            r.Message.setField(this, 5, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasLazy = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.google.protobuf.FieldOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 3, !1)
                        }, proto.google.protobuf.FieldOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.FieldOptions.prototype.getWeak = function() {
                            return r.Message.getFieldWithDefault(this, 10, !1)
                        }, proto.google.protobuf.FieldOptions.prototype.setWeak = function(e) {
                            r.Message.setField(this, 10, e)
                        }, proto.google.protobuf.FieldOptions.prototype.clearWeak = function() {
                            r.Message.setField(this, 10, void 0)
                        }, proto.google.protobuf.FieldOptions.prototype.hasWeak = function() {
                            return null != r.Message.getField(this, 10)
                        }, proto.google.protobuf.FieldOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.FieldOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.FieldOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.FieldOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.FieldOptions.extensions = {}, proto.google.protobuf.FieldOptions.extensionsBinary = {}, proto.google.protobuf.OneofOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.OneofOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.OneofOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.OneofOptions.displayName = "proto.google.protobuf.OneofOptions"), proto.google.protobuf.OneofOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.OneofOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.OneofOptions.toObject(e, this)
                        }, proto.google.protobuf.OneofOptions.toObject = function(e, t) {
                            var o = {
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.OneofOptions.extensions, proto.google.protobuf.OneofOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.OneofOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.OneofOptions;
                            return proto.google.protobuf.OneofOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.OneofOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                999 === t.getFieldNumber() ? (o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o)) : r.Message.readBinaryExtension(e, t, proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension, proto.google.protobuf.OneofOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.OneofOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.OneofOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.OneofOptions.serializeBinaryToWriter = function(e, t) {
                            var o;
                            0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension)
                        }, proto.google.protobuf.OneofOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.OneofOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.OneofOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.OneofOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.OneofOptions.extensions = {}, proto.google.protobuf.OneofOptions.extensionsBinary = {}, proto.google.protobuf.EnumOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.EnumOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.EnumOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.EnumOptions.displayName = "proto.google.protobuf.EnumOptions"), proto.google.protobuf.EnumOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.EnumOptions.toObject(e, this)
                        }, proto.google.protobuf.EnumOptions.toObject = function(e, t) {
                            var o = {
                                allowAlias: r.Message.getField(t, 2),
                                deprecated: r.Message.getFieldWithDefault(t, 3, !1),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.EnumOptions.extensions, proto.google.protobuf.EnumOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.EnumOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.EnumOptions;
                            return proto.google.protobuf.EnumOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.EnumOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 2:
                                    var o = t.readBool();
                                    e.setAllowAlias(o);
                                    break;
                                case 3:
                                    o = t.readBool(), e.setDeprecated(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension, proto.google.protobuf.EnumOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.EnumOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.EnumOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.EnumOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 2)) && t.writeBool(2, o), null != (o = r.Message.getField(e, 3)) && t.writeBool(3, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension)
                        }, proto.google.protobuf.EnumOptions.prototype.getAllowAlias = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.google.protobuf.EnumOptions.prototype.setAllowAlias = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.EnumOptions.prototype.clearAllowAlias = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.EnumOptions.prototype.hasAllowAlias = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.EnumOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 3, !1)
                        }, proto.google.protobuf.EnumOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.EnumOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.EnumOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.EnumOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.EnumOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.EnumOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.EnumOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.EnumOptions.extensions = {}, proto.google.protobuf.EnumOptions.extensionsBinary = {}, proto.google.protobuf.EnumValueOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.EnumValueOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.EnumValueOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.EnumValueOptions.displayName = "proto.google.protobuf.EnumValueOptions"), proto.google.protobuf.EnumValueOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumValueOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.EnumValueOptions.toObject(e, this)
                        }, proto.google.protobuf.EnumValueOptions.toObject = function(e, t) {
                            var o = {
                                deprecated: r.Message.getFieldWithDefault(t, 1, !1),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.EnumValueOptions.extensions, proto.google.protobuf.EnumValueOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.EnumValueOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.EnumValueOptions;
                            return proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readBool();
                                    e.setDeprecated(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension, proto.google.protobuf.EnumValueOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.EnumValueOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeBool(1, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension)
                        }, proto.google.protobuf.EnumValueOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 1, !1)
                        }, proto.google.protobuf.EnumValueOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.EnumValueOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.EnumValueOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.EnumValueOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.EnumValueOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.EnumValueOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.EnumValueOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.EnumValueOptions.extensions = {}, proto.google.protobuf.EnumValueOptions.extensionsBinary = {}, proto.google.protobuf.ServiceOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.ServiceOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.ServiceOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.ServiceOptions.displayName = "proto.google.protobuf.ServiceOptions"), proto.google.protobuf.ServiceOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ServiceOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.ServiceOptions.toObject(e, this)
                        }, proto.google.protobuf.ServiceOptions.toObject = function(e, t) {
                            var o = {
                                deprecated: r.Message.getFieldWithDefault(t, 33, !1),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.ServiceOptions.extensions, proto.google.protobuf.ServiceOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.ServiceOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.ServiceOptions;
                            return proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 33:
                                    var o = t.readBool();
                                    e.setDeprecated(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension, proto.google.protobuf.ServiceOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.ServiceOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.ServiceOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.ServiceOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 33)) && t.writeBool(33, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension)
                        }, proto.google.protobuf.ServiceOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 33, !1)
                        }, proto.google.protobuf.ServiceOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 33, e)
                        }, proto.google.protobuf.ServiceOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 33, void 0)
                        }, proto.google.protobuf.ServiceOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 33)
                        }, proto.google.protobuf.ServiceOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.ServiceOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.ServiceOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.ServiceOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.ServiceOptions.extensions = {}, proto.google.protobuf.ServiceOptions.extensionsBinary = {}, proto.google.protobuf.MethodOptions = function(e) {
                            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.MethodOptions.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.MethodOptions, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.MethodOptions.displayName = "proto.google.protobuf.MethodOptions"), proto.google.protobuf.MethodOptions.repeatedFields_ = [999], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MethodOptions.prototype.toObject = function(e) {
                            return proto.google.protobuf.MethodOptions.toObject(e, this)
                        }, proto.google.protobuf.MethodOptions.toObject = function(e, t) {
                            var o = {
                                deprecated: r.Message.getFieldWithDefault(t, 33, !1),
                                idempotencyLevel: r.Message.getFieldWithDefault(t, 34, 0),
                                uninterpretedOptionList: r.Message.toObjectList(t.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
                            };
                            return r.Message.toObjectExtension(t, o, proto.google.protobuf.MethodOptions.extensions, proto.google.protobuf.MethodOptions.prototype.getExtension, e), e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.MethodOptions.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.MethodOptions;
                            return proto.google.protobuf.MethodOptions.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.MethodOptions.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 33:
                                    var o = t.readBool();
                                    e.setDeprecated(o);
                                    break;
                                case 34:
                                    o = t.readEnum(), e.setIdempotencyLevel(o);
                                    break;
                                case 999:
                                    o = new proto.google.protobuf.UninterpretedOption, t.readMessage(o, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(o);
                                    break;
                                default:
                                    r.Message.readBinaryExtension(e, t, proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension, proto.google.protobuf.MethodOptions.prototype.setExtension)
                            }
                            return e
                        }, proto.google.protobuf.MethodOptions.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.MethodOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.MethodOptions.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 33)) && t.writeBool(33, o), null != (o = r.Message.getField(e, 34)) && t.writeEnum(34, o), 0 < (o = e.getUninterpretedOptionList()).length && t.writeRepeatedMessage(999, o, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, t, proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension)
                        }, proto.google.protobuf.MethodOptions.IdempotencyLevel = {
                            IDEMPOTENCY_UNKNOWN: 0,
                            NO_SIDE_EFFECTS: 1,
                            IDEMPOTENT: 2
                        }, proto.google.protobuf.MethodOptions.prototype.getDeprecated = function() {
                            return r.Message.getFieldWithDefault(this, 33, !1)
                        }, proto.google.protobuf.MethodOptions.prototype.setDeprecated = function(e) {
                            r.Message.setField(this, 33, e)
                        }, proto.google.protobuf.MethodOptions.prototype.clearDeprecated = function() {
                            r.Message.setField(this, 33, void 0)
                        }, proto.google.protobuf.MethodOptions.prototype.hasDeprecated = function() {
                            return null != r.Message.getField(this, 33)
                        }, proto.google.protobuf.MethodOptions.prototype.getIdempotencyLevel = function() {
                            return r.Message.getFieldWithDefault(this, 34, 0)
                        }, proto.google.protobuf.MethodOptions.prototype.setIdempotencyLevel = function(e) {
                            r.Message.setField(this, 34, e)
                        }, proto.google.protobuf.MethodOptions.prototype.clearIdempotencyLevel = function() {
                            r.Message.setField(this, 34, void 0)
                        }, proto.google.protobuf.MethodOptions.prototype.hasIdempotencyLevel = function() {
                            return null != r.Message.getField(this, 34)
                        }, proto.google.protobuf.MethodOptions.prototype.getUninterpretedOptionList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
                        }, proto.google.protobuf.MethodOptions.prototype.setUninterpretedOptionList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 999, e)
                        }, proto.google.protobuf.MethodOptions.prototype.addUninterpretedOption = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, t)
                        }, proto.google.protobuf.MethodOptions.prototype.clearUninterpretedOptionList = function() {
                            this.setUninterpretedOptionList([])
                        }, proto.google.protobuf.MethodOptions.extensions = {}, proto.google.protobuf.MethodOptions.extensionsBinary = {}, proto.google.protobuf.UninterpretedOption = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.UninterpretedOption.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.UninterpretedOption, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.UninterpretedOption.displayName = "proto.google.protobuf.UninterpretedOption"), proto.google.protobuf.UninterpretedOption.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.UninterpretedOption.prototype.toObject = function(e) {
                            return proto.google.protobuf.UninterpretedOption.toObject(e, this)
                        }, proto.google.protobuf.UninterpretedOption.toObject = function(e, t) {
                            var o = {
                                nameList: r.Message.toObjectList(t.getNameList(), proto.google.protobuf.UninterpretedOption.NamePart.toObject, e),
                                identifierValue: r.Message.getField(t, 3),
                                positiveIntValue: r.Message.getField(t, 4),
                                negativeIntValue: r.Message.getField(t, 5),
                                doubleValue: r.Message.getOptionalFloatingPointField(t, 6),
                                stringValue: t.getStringValue_asB64(),
                                aggregateValue: r.Message.getField(t, 8)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.UninterpretedOption.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.UninterpretedOption;
                            return proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 2:
                                    var o = new proto.google.protobuf.UninterpretedOption.NamePart;
                                    t.readMessage(o, proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader), e.addName(o);
                                    break;
                                case 3:
                                    o = t.readString(), e.setIdentifierValue(o);
                                    break;
                                case 4:
                                    o = t.readUint64(), e.setPositiveIntValue(o);
                                    break;
                                case 5:
                                    o = t.readInt64(), e.setNegativeIntValue(o);
                                    break;
                                case 6:
                                    o = t.readDouble(), e.setDoubleValue(o);
                                    break;
                                case 7:
                                    o = t.readBytes(), e.setStringValue(o);
                                    break;
                                case 8:
                                    o = t.readString(), e.setAggregateValue(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.UninterpretedOption.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getNameList()).length && t.writeRepeatedMessage(2, o, proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter), null != (o = r.Message.getField(e, 3)) && t.writeString(3, o), null != (o = r.Message.getField(e, 4)) && t.writeUint64(4, o), null != (o = r.Message.getField(e, 5)) && t.writeInt64(5, o), null != (o = r.Message.getField(e, 6)) && t.writeDouble(6, o), null != (o = r.Message.getField(e, 7)) && t.writeBytes(7, o), null != (o = r.Message.getField(e, 8)) && t.writeString(8, o)
                        }, proto.google.protobuf.UninterpretedOption.NamePart = function(e) {
                            r.Message.initialize(this, e, 0, -1, null, null)
                        }, i.inherits(proto.google.protobuf.UninterpretedOption.NamePart, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.UninterpretedOption.NamePart.displayName = "proto.google.protobuf.UninterpretedOption.NamePart"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.UninterpretedOption.NamePart.prototype.toObject = function(e) {
                            return proto.google.protobuf.UninterpretedOption.NamePart.toObject(e, this)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.toObject = function(e, t) {
                            var o = {
                                namePart: r.Message.getField(t, 1),
                                isExtension: r.Message.getField(t, 2)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.UninterpretedOption.NamePart;
                            return proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readString();
                                    e.setNamePart(o);
                                    break;
                                case 2:
                                    o = t.readBool(), e.setIsExtension(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            null != (o = r.Message.getField(e, 1)) && t.writeString(1, o), null != (o = r.Message.getField(e, 2)) && t.writeBool(2, o)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.getNamePart = function() {
                            return r.Message.getFieldWithDefault(this, 1, "")
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.setNamePart = function(e) {
                            r.Message.setField(this, 1, e)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearNamePart = function() {
                            r.Message.setField(this, 1, void 0)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasNamePart = function() {
                            return null != r.Message.getField(this, 1)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.getIsExtension = function() {
                            return r.Message.getFieldWithDefault(this, 2, !1)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.setIsExtension = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearIsExtension = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasIsExtension = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getNameList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption.NamePart, 2)
                        }, proto.google.protobuf.UninterpretedOption.prototype.setNameList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 2, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.addName = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.UninterpretedOption.NamePart, t)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearNameList = function() {
                            this.setNameList([])
                        }, proto.google.protobuf.UninterpretedOption.prototype.getIdentifierValue = function() {
                            return r.Message.getFieldWithDefault(this, 3, "")
                        }, proto.google.protobuf.UninterpretedOption.prototype.setIdentifierValue = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearIdentifierValue = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasIdentifierValue = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getPositiveIntValue = function() {
                            return r.Message.getFieldWithDefault(this, 4, 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.setPositiveIntValue = function(e) {
                            r.Message.setField(this, 4, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearPositiveIntValue = function() {
                            r.Message.setField(this, 4, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasPositiveIntValue = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getNegativeIntValue = function() {
                            return r.Message.getFieldWithDefault(this, 5, 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.setNegativeIntValue = function(e) {
                            r.Message.setField(this, 5, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearNegativeIntValue = function() {
                            r.Message.setField(this, 5, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasNegativeIntValue = function() {
                            return null != r.Message.getField(this, 5)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getDoubleValue = function() {
                            return +r.Message.getFieldWithDefault(this, 6, 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.setDoubleValue = function(e) {
                            r.Message.setField(this, 6, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearDoubleValue = function() {
                            r.Message.setField(this, 6, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasDoubleValue = function() {
                            return null != r.Message.getField(this, 6)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getStringValue = function() {
                            return r.Message.getFieldWithDefault(this, 7, "")
                        }, proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asB64 = function() {
                            return r.Message.bytesAsB64(this.getStringValue())
                        }, proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asU8 = function() {
                            return r.Message.bytesAsU8(this.getStringValue())
                        }, proto.google.protobuf.UninterpretedOption.prototype.setStringValue = function(e) {
                            r.Message.setField(this, 7, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearStringValue = function() {
                            r.Message.setField(this, 7, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasStringValue = function() {
                            return null != r.Message.getField(this, 7)
                        }, proto.google.protobuf.UninterpretedOption.prototype.getAggregateValue = function() {
                            return r.Message.getFieldWithDefault(this, 8, "")
                        }, proto.google.protobuf.UninterpretedOption.prototype.setAggregateValue = function(e) {
                            r.Message.setField(this, 8, e)
                        }, proto.google.protobuf.UninterpretedOption.prototype.clearAggregateValue = function() {
                            r.Message.setField(this, 8, void 0)
                        }, proto.google.protobuf.UninterpretedOption.prototype.hasAggregateValue = function() {
                            return null != r.Message.getField(this, 8)
                        }, proto.google.protobuf.SourceCodeInfo = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.SourceCodeInfo.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.SourceCodeInfo, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.SourceCodeInfo.displayName = "proto.google.protobuf.SourceCodeInfo"), proto.google.protobuf.SourceCodeInfo.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.SourceCodeInfo.prototype.toObject = function(e) {
                            return proto.google.protobuf.SourceCodeInfo.toObject(e, this)
                        }, proto.google.protobuf.SourceCodeInfo.toObject = function(e, t) {
                            var o = {
                                locationList: r.Message.toObjectList(t.getLocationList(), proto.google.protobuf.SourceCodeInfo.Location.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.SourceCodeInfo.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.SourceCodeInfo;
                            return proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                1 === t.getFieldNumber() ? (o = new proto.google.protobuf.SourceCodeInfo.Location, t.readMessage(o, proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader), e.addLocation(o)) : t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.SourceCodeInfo.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter = function(e, t) {
                            0 < (e = e.getLocationList()).length && t.writeRepeatedMessage(1, e, proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter)
                        }, proto.google.protobuf.SourceCodeInfo.Location = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.SourceCodeInfo.Location, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.SourceCodeInfo.Location.displayName = "proto.google.protobuf.SourceCodeInfo.Location"), proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_ = [1, 2, 6], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.SourceCodeInfo.Location.prototype.toObject = function(e) {
                            return proto.google.protobuf.SourceCodeInfo.Location.toObject(e, this)
                        }, proto.google.protobuf.SourceCodeInfo.Location.toObject = function(e, t) {
                            var o = {
                                pathList: r.Message.getRepeatedField(t, 1),
                                spanList: r.Message.getRepeatedField(t, 2),
                                leadingComments: r.Message.getField(t, 3),
                                trailingComments: r.Message.getField(t, 4),
                                leadingDetachedCommentsList: r.Message.getRepeatedField(t, 6)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.SourceCodeInfo.Location.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.SourceCodeInfo.Location;
                            return proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readPackedInt32();
                                    e.setPathList(o);
                                    break;
                                case 2:
                                    o = t.readPackedInt32(), e.setSpanList(o);
                                    break;
                                case 3:
                                    o = t.readString(), e.setLeadingComments(o);
                                    break;
                                case 4:
                                    o = t.readString(), e.setTrailingComments(o);
                                    break;
                                case 6:
                                    o = t.readString(), e.addLeadingDetachedComments(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getPathList()).length && t.writePackedInt32(1, o), 0 < (o = e.getSpanList()).length && t.writePackedInt32(2, o), null != (o = r.Message.getField(e, 3)) && t.writeString(3, o), null != (o = r.Message.getField(e, 4)) && t.writeString(4, o), 0 < (o = e.getLeadingDetachedCommentsList()).length && t.writeRepeatedString(6, o)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.getPathList = function() {
                            return r.Message.getRepeatedField(this, 1)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.setPathList = function(e) {
                            r.Message.setField(this, 1, e || [])
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.addPath = function(e, t) {
                            r.Message.addToRepeatedField(this, 1, e, t)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.clearPathList = function() {
                            this.setPathList([])
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.getSpanList = function() {
                            return r.Message.getRepeatedField(this, 2)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.setSpanList = function(e) {
                            r.Message.setField(this, 2, e || [])
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.addSpan = function(e, t) {
                            r.Message.addToRepeatedField(this, 2, e, t)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.clearSpanList = function() {
                            this.setSpanList([])
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingComments = function() {
                            return r.Message.getFieldWithDefault(this, 3, "")
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingComments = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingComments = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.hasLeadingComments = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.getTrailingComments = function() {
                            return r.Message.getFieldWithDefault(this, 4, "")
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.setTrailingComments = function(e) {
                            r.Message.setField(this, 4, e)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.clearTrailingComments = function() {
                            r.Message.setField(this, 4, void 0)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.hasTrailingComments = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingDetachedCommentsList = function() {
                            return r.Message.getRepeatedField(this, 6)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingDetachedCommentsList = function(e) {
                            r.Message.setField(this, 6, e || [])
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.addLeadingDetachedComments = function(e, t) {
                            r.Message.addToRepeatedField(this, 6, e, t)
                        }, proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingDetachedCommentsList = function() {
                            this.setLeadingDetachedCommentsList([])
                        }, proto.google.protobuf.SourceCodeInfo.prototype.getLocationList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.SourceCodeInfo.Location, 1)
                        }, proto.google.protobuf.SourceCodeInfo.prototype.setLocationList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 1, e)
                        }, proto.google.protobuf.SourceCodeInfo.prototype.addLocation = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.SourceCodeInfo.Location, t)
                        }, proto.google.protobuf.SourceCodeInfo.prototype.clearLocationList = function() {
                            this.setLocationList([])
                        }, proto.google.protobuf.GeneratedCodeInfo = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.GeneratedCodeInfo.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.GeneratedCodeInfo, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.GeneratedCodeInfo.displayName = "proto.google.protobuf.GeneratedCodeInfo"), proto.google.protobuf.GeneratedCodeInfo.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.GeneratedCodeInfo.prototype.toObject = function(e) {
                            return proto.google.protobuf.GeneratedCodeInfo.toObject(e, this)
                        }, proto.google.protobuf.GeneratedCodeInfo.toObject = function(e, t) {
                            var o = {
                                annotationList: r.Message.toObjectList(t.getAnnotationList(), proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject, e)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.GeneratedCodeInfo.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.GeneratedCodeInfo;
                            return proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) {
                                var o;
                                1 === t.getFieldNumber() ? (o = new proto.google.protobuf.GeneratedCodeInfo.Annotation, t.readMessage(o, proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader), e.addAnnotation(o)) : t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.GeneratedCodeInfo.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter = function(e, t) {
                            0 < (e = e.getAnnotationList()).length && t.writeRepeatedMessage(1, e, proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation = function(e) {
                            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_, null)
                        }, i.inherits(proto.google.protobuf.GeneratedCodeInfo.Annotation, r.Message), i.DEBUG && !COMPILED && (proto.google.protobuf.GeneratedCodeInfo.Annotation.displayName = "proto.google.protobuf.GeneratedCodeInfo.Annotation"), proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.toObject = function(e) {
                            return proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject(e, this)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject = function(e, t) {
                            var o = {
                                pathList: r.Message.getRepeatedField(t, 1),
                                sourceFile: r.Message.getField(t, 2),
                                begin: r.Message.getField(t, 3),
                                end: r.Message.getField(t, 4)
                            };
                            return e && (o.$jspbMessageInstance = t), o
                        }), proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinary = function(e) {
                            var t = new r.BinaryReader(e),
                                e = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
                            return proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader(e, t)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader = function(e, t) {
                            for (; t.nextField() && !t.isEndGroup();) switch (t.getFieldNumber()) {
                                case 1:
                                    var o = t.readPackedInt32();
                                    e.setPathList(o);
                                    break;
                                case 2:
                                    o = t.readString(), e.setSourceFile(o);
                                    break;
                                case 3:
                                    o = t.readInt32(), e.setBegin(o);
                                    break;
                                case 4:
                                    o = t.readInt32(), e.setEnd(o);
                                    break;
                                default:
                                    t.skipField()
                            }
                            return e
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.serializeBinary = function() {
                            var e = new r.BinaryWriter;
                            return proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter(this, e), e.getResultBuffer()
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter = function(e, t) {
                            var o = void 0;
                            0 < (o = e.getPathList()).length && t.writePackedInt32(1, o), null != (o = r.Message.getField(e, 2)) && t.writeString(2, o), null != (o = r.Message.getField(e, 3)) && t.writeInt32(3, o), null != (o = r.Message.getField(e, 4)) && t.writeInt32(4, o)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getPathList = function() {
                            return r.Message.getRepeatedField(this, 1)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setPathList = function(e) {
                            r.Message.setField(this, 1, e || [])
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.addPath = function(e, t) {
                            r.Message.addToRepeatedField(this, 1, e, t)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearPathList = function() {
                            this.setPathList([])
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getSourceFile = function() {
                            return r.Message.getFieldWithDefault(this, 2, "")
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setSourceFile = function(e) {
                            r.Message.setField(this, 2, e)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearSourceFile = function() {
                            r.Message.setField(this, 2, void 0)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasSourceFile = function() {
                            return null != r.Message.getField(this, 2)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getBegin = function() {
                            return r.Message.getFieldWithDefault(this, 3, 0)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setBegin = function(e) {
                            r.Message.setField(this, 3, e)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearBegin = function() {
                            r.Message.setField(this, 3, void 0)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasBegin = function() {
                            return null != r.Message.getField(this, 3)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getEnd = function() {
                            return r.Message.getFieldWithDefault(this, 4, 0)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setEnd = function(e) {
                            r.Message.setField(this, 4, e)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearEnd = function() {
                            r.Message.setField(this, 4, void 0)
                        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasEnd = function() {
                            return null != r.Message.getField(this, 4)
                        }, proto.google.protobuf.GeneratedCodeInfo.prototype.getAnnotationList = function() {
                            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.GeneratedCodeInfo.Annotation, 1)
                        }, proto.google.protobuf.GeneratedCodeInfo.prototype.setAnnotationList = function(e) {
                            r.Message.setRepeatedWrapperField(this, 1, e)
                        }, proto.google.protobuf.GeneratedCodeInfo.prototype.addAnnotation = function(e, t) {
                            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.GeneratedCodeInfo.Annotation, t)
                        }, proto.google.protobuf.GeneratedCodeInfo.prototype.clearAnnotationList = function() {
                            this.setAnnotationList([])
                        }, i.object.extend(t, proto.google.protobuf)
                    }, function(e, t, o) {
                        "use strict";
                        e.exports = o(21).Thrift
                    }, function(e, t, o) {
                        "use strict";
                        e.exports = o(21).crouton_thrift
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, i = function(e, t, o) {
                                return t && p(e.prototype, t), o && p(e, o), e
                            },
                            n = o(1),
                            s = (r = o(0)) && r.__esModule ? r : {
                                default: r
                            },
                            a = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(o(4));

                        function p(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var l = o(12),
                            g = o(3),
                            i = (i(u, [{
                                key: "_clearOverLimits",
                                value: function() {
                                    this._keysOverLimit = 0, this._valuesOverLimit = 0
                                }
                            }, {
                                key: "getNumKeysOverLimit",
                                value: function() {
                                    return this._keysOverLimit
                                }
                            }, {
                                key: "getNumValuesOverLimit",
                                value: function() {
                                    return this._valuesOverLimit
                                }
                            }, {
                                key: "toThrift",
                                value: function() {
                                    var o = this;
                                    this._clearOverLimits();
                                    var r = [];
                                    return (0, s.default)(this._fields, function(e, t) {
                                        t && e && (t = o.getFieldKey(t), e = o.getFieldValue(e), r.push(new n.crouton_thrift.KeyValue({
                                            Key: t,
                                            Value: e
                                        })))
                                    }), new n.crouton_thrift.LogRecord({
                                        timestamp_micros: this._timestampMicros,
                                        fields: r
                                    })
                                }
                            }, {
                                key: "getFieldKey",
                                value: function(e) {
                                    e = a.toString(e);
                                    return e.length > this._logFieldKeyHardLimit && (this._keysOverLimit += 1, e = e.substr(0, this._logFieldKeyHardLimit) + "..."), e
                                }
                            }, {
                                key: "getFieldValue",
                                value: function(e) {
                                    var t = null;
                                    if (e instanceof Error) try {
                                        t = JSON.stringify(e, Object.getOwnPropertyNames(e))
                                    } catch (e) {
                                        t = "Could not encode value. Exception: " + e
                                    } else if (e instanceof Object) try {
                                        t = JSON.stringify(e, null, "  ")
                                    } catch (e) {
                                        t = "Could not encode value. Exception: " + e
                                    } else t = a.toString(e);
                                    return t.length > this._logFieldValueHardLimit && (this._valuesOverLimit += 1, t = t.substr(0, this._logFieldValueHardLimit) + "..."), t
                                }
                            }, {
                                key: "toProto",
                                value: function() {
                                    var r = this;
                                    this._clearOverLimits();
                                    var e = new g.Log,
                                        t = new l.Timestamp,
                                        o = Math.floor(this._timestampMicros / 1e6),
                                        i = this._timestampMicros % 1e6 * 1e3;
                                    t.setSeconds(o), t.setNanos(i), e.setTimestamp(t);
                                    var n = [];
                                    return (0, s.default)(this._fields, function(e, t) {
                                        var o;
                                        t && e && (o = r.getFieldKey(t), t = r.getFieldValue(e), (e = new g.KeyValue).setKey(o), e.setStringValue(t), n.push(e))
                                    }), e.setFieldsList(n), e
                                }
                            }]), u);

                        function u(e, t, o, r) {
                            ! function(e) {
                                if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function")
                            }(this), r instanceof Error && (r = {
                                stack: r.stack,
                                message: r.message
                            }), this._logFieldKeyHardLimit = e, this._logFieldValueHardLimit = t, this._timestampMicros = o, this._fields = r, this._keysOverLimit = 0, this._valuesOverLimit = 0
                        }
                        t.default = i, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            i = o(1);

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var s = o(3),
                            r = (r(a, [{
                                key: "getAccessToken",
                                value: function() {
                                    return void 0 === this._accessToken || null === this._accessToken || 0 === this._accessToken.length ? "empty" : this._accessToken
                                }
                            }, {
                                key: "toThrift",
                                value: function() {
                                    return new i.crouton_thrift.Auth({
                                        access_token: this._accessToken
                                    })
                                }
                            }, {
                                key: "toProto",
                                value: function() {
                                    var e = new s.Auth;
                                    return e.setAccessToken(this._accessToken), e
                                }
                            }]), a);

                        function a(e) {
                            ! function(e) {
                                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._accessToken = e
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, i = function(e, t, o) {
                                return t && a(e.prototype, t), o && a(e, o), e
                            },
                            n = o(1),
                            p = (r = o(0)) && r.__esModule ? r : {
                                default: r
                            },
                            s = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(o(4));

                        function a(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var l = o(23),
                            g = o(3),
                            u = o(24),
                            i = (i(c, [{
                                key: "toThrift",
                                value: function() {
                                    var o = [];
                                    return (0, p.default)(this._attributes, function(e, t) {
                                        o.push(new n.crouton_thrift.KeyValue({
                                            Key: s.toString(t),
                                            Value: s.toString(e)
                                        }))
                                    }), new n.crouton_thrift.Runtime({
                                        guid: this._runtimeGUID,
                                        start_micros: this._startMicros,
                                        group_name: this._componentName,
                                        attrs: o
                                    })
                                }
                            }, {
                                key: "toProto",
                                value: function() {
                                    var e = new g.KeyValue;
                                    e.setKey("lightstep.tracer_version"), e.setStringValue(u.version);
                                    var t = new g.KeyValue;
                                    t.setKey("lightstep.tracer_platform"), t.setStringValue(this._attributes["lightstep.tracer_platform"]);
                                    var o = new g.KeyValue;
                                    o.setKey("lightstep.tracer_platform_version"), o.setStringValue(this._attributes["lightstep.tracer_platform_version"]);
                                    var r = new g.KeyValue;
                                    r.setKey("lightstep.component_name"), r.setStringValue(this._componentName);
                                    var i = new g.KeyValue;
                                    i.setKey("lightstep.command_line"), i.setStringValue(this._attributes["lightstep.command_line"]);
                                    var n = new g.KeyValue;
                                    n.setKey("lightstep.hostname"), n.setStringValue(this._attributes["lightstep.hostname"]);
                                    var s = l.hexToDec(this._runtimeGUID),
                                        a = [];
                                    (0, p.default)(this._attributes, function(e, t) {
                                        var o = new g.KeyValue;
                                        o.setKey(t), o.setStringValue(e), a.push(o)
                                    });
                                    n = [e, t, r, i, n, o].concat(a), o = new g.Reporter;
                                    return o.setReporterId(s), o.setTagsList(n), o
                                }
                            }]), c);

                        function c(e, t, o, r) {
                            ! function(e) {
                                if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._runtimeGUID = e, this._startMicros = t, this._componentName = o, this._attributes = r
                        }
                        t.default = i, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, i = function(e, t, o) {
                                return t && p(e.prototype, t), o && p(e, o), e
                            },
                            n = o(1),
                            s = (r = o(0)) && r.__esModule ? r : {
                                default: r
                            },
                            a = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t.default = e, t
                            }(o(4));

                        function p(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var l = o(3),
                            i = (i(g, [{
                                key: "getSpanRecords",
                                value: function() {
                                    return this._spanRecords
                                }
                            }, {
                                key: "getInternalLogs",
                                value: function() {
                                    return this._internalLogs
                                }
                            }, {
                                key: "getCounters",
                                value: function() {
                                    return this._counters
                                }
                            }, {
                                key: "toThrift",
                                value: function() {
                                    var t = this;
                                    (0, s.default)(this._spanRecords, function(e) {
                                        e.runtime_guid = t._runtimeGUID
                                    });
                                    var o = [];
                                    (0, s.default)(this._counters, function(e, t) {
                                        0 !== e && o.push(new n.crouton_thrift.MetricsSample({
                                            name: a.toString(t),
                                            double_value: a.toNumber(e)
                                        }))
                                    });
                                    var r = [];
                                    return (0, s.default)(this._spanRecords, function(e) {
                                        r.push(e._toThrift())
                                    }), new n.crouton_thrift.ReportRequest({
                                        runtime: this._runtime.toThrift(),
                                        oldest_micros: this._oldestMicros,
                                        youngest_micros: this._youngestMicros,
                                        span_records: r,
                                        internal_logs: this._internalLogs,
                                        internal_metrics: new n.crouton_thrift.Metrics({
                                            counts: o
                                        }),
                                        timestamp_offset_micros: this._timestampOffsetMicros
                                    })
                                }
                            }, {
                                key: "toProto",
                                value: function(e) {
                                    var t = [];
                                    (0, s.default)(this._spanRecords, function(e) {
                                        t.push(e._toProto())
                                    });
                                    var o = [];
                                    (0, s.default)(this._counters, function(e) {
                                        var t = new l.MetricsSample;
                                        t.setName(e.name), t.setIntValue(e.int64_value), t.setDoubleValue(e.double_value), o.push(t)
                                    });
                                    var r = new l.InternalMetrics;
                                    r.setCountsList(o);
                                    var i = new l.ReportRequest;
                                    return i.setAuth(e.toProto()), i.setReporter(this._runtime.toProto()), i.setSpansList(t), i.setTimestampOffsetMicros(this._timestampOffsetMicros.toString(10)), i.setInternalMetrics(r), i
                                }
                            }]), g);

                        function g(e, t, o, r, i, n, s) {
                            ! function(e) {
                                if (!(e instanceof g)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._runtime = e, this._oldestMicros = t, this._youngestMicros = o, this._spanRecords = r, this._internalLogs = i, this._counters = n, this._timestampOffsetMicros = s
                        }
                        t.default = i, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";

                        function r(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = (function(e, t, o) {
                            return t && r(e.prototype, t), o && r(e, o), e
                        }(n, [{
                            key: "inject",
                            value: function() {
                                return this._tracer._error("Unsupported format: " + this._name), null
                            }
                        }, {
                            key: "extract",
                            value: function() {
                                this._tracer._error("Unsupported format: " + this._name)
                            }
                        }]), n);

                        function n(e, t) {
                            ! function(e) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._tracer = e, this._name = t
                        }
                        t.default = i, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            i = (o = o(0)) && o.__esModule ? o : {
                                default: o
                            };

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var s = 7,
                            a = 36e8,
                            r = (r(p, [{
                                key: "addSample",
                                value: function(e, t, o, r) {
                                    var i = Number.MAX_VALUE,
                                        n = 0;
                                    0 < e && 0 < t && 0 < o && 0 < r && (i = r - e - (o - t), n = (t - e + (o - r)) / 2), this._samples.length === s + 1 && this._samples.shift(), this._samples.push({
                                        delayMicros: i,
                                        offsetMicros: n
                                    }), this._currentOffsetAge++, this._localStoreSet({
                                        timestamp_micros: this._nowMicros(),
                                        samples: this._samples
                                    }), this.update()
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t, o = Number.MAX_VALUE,
                                        r = 0;
                                    (0, i.default)(this._samples, function(e) {
                                        e.delayMicros < o && (o = e.delayMicros, r = e.offsetMicros)
                                    }), r !== this._currentOffsetMicros && ((t = 0, i.default)(this._samples, function(e) {
                                        t += Math.pow(r - e.offsetMicros, 2)
                                    }), t = Math.sqrt(t / this._samples.length), (this._currentOffsetAge > s || Math.abs(this._currentOffsetMicros - r) < 3 * t) && (this._currentOffsetMicros = r, this._currentOffsetAge = 0))
                                }
                            }, {
                                key: "offsetMicros",
                                value: function() {
                                    return Math.floor(this._currentOffsetMicros)
                                }
                            }, {
                                key: "isReady",
                                value: function() {
                                    return 3 < this._samples.length
                                }
                            }, {
                                key: "activeSampleCount",
                                value: function() {
                                    return this._samples.length
                                }
                            }]), p);

                        function p(e) {
                            ! function(e) {
                                if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._nowMicros = e.nowMicros, this._localStoreGet = e.localStoreGet, this._localStoreSet = e.localStoreSet, this._samples = [], this._currentOffsetMicros = 0, this._currentOffsetAge = s + 1;
                            e = this._localStoreGet();
                            e && e.timestamp_micros && e.timestamp_micros > this._nowMicros() - a && (this._samples = e.samples.slice(-(s + 1))), this.update()
                        }
                        e.exports = r
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            i = o(1);

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var s = o(8),
                            a = o(4),
                            r = (r(p, [{
                                key: "record",
                                value: function() {
                                    return this._record
                                }
                            }, {
                                key: "end",
                                value: function() {
                                    this._runtime._addLogRecord(this._record)
                                }
                            }, {
                                key: "timestamp",
                                value: function(e) {
                                    return this._record.timestamp_micros = a.toNumber(e), this
                                }
                            }, {
                                key: "message",
                                value: function(e) {
                                    return this._record.message = a.toString(e), this
                                }
                            }, {
                                key: "level",
                                value: function(e) {
                                    return this._record.level = s.LOG_LEVEL_TO_STRING[e] || null, e >= s.LOG_ERROR && this.error(!0), this
                                }
                            }, {
                                key: "span",
                                value: function(e) {
                                    return void 0 !== e && (this._record.span_guid = a.toString(e)), this
                                }
                            }, {
                                key: "name",
                                value: function(e) {
                                    return this._record.stable_name = a.toString(e), this
                                }
                            }, {
                                key: "error",
                                value: function(e) {
                                    return this._record.error_flag = a.toBoolean(e), this
                                }
                            }, {
                                key: "payload",
                                value: function(e) {
                                    return void 0 !== e && (this._record.payload_json = this._encodePayload(e)), this
                                }
                            }, {
                                key: "_encodePayload",
                                value: function(e) {
                                    var t = null;
                                    try {
                                        t = JSON.stringify(e)
                                    } catch (e) {
                                        return
                                    }
                                    return t
                                }
                            }]), p);

                        function p(e) {
                            ! function(e) {
                                if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._runtime = e, this._record = new i.crouton_thrift.LogRecord({
                                timestamp_micros: e._platform.nowMicros(),
                                runtime_guid: null,
                                span_guid: null,
                                stable_name: null,
                                message: null,
                                level: null,
                                thread_id: null,
                                filename: null,
                                line_number: null,
                                stack_frames: null,
                                payload_json: null,
                                error_flag: null
                            })
                        }
                        e.exports = r
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            i = (o = o(0)) && o.__esModule ? o : {
                                default: o
                            };

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        r(s, [{
                            key: "setOptions",
                            value: function(e) {
                                var o = this;
                                (0, i.default)(e, function(e, t) {
                                    o.options[t] = e
                                })
                            }
                        }]), r = s;

                        function s() {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this), this.options = {}
                        }
                        e.exports = new r
                    }, function(e, t, o) {
                        "use strict";
                        var r = function(e, t, o) {
                            return t && i(e.prototype, t), o && i(e, o), e
                        };

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var n = o(8),
                            r = (r(s, [{
                                key: "name",
                                value: function() {
                                    return "log_to_console"
                                }
                            }, {
                                key: "addOptions",
                                value: function(e) {
                                    e.addOption("log_to_console", {
                                        type: "bool",
                                        defaultValue: !1
                                    }), e.on("options", this._optionsCb)
                                }
                            }, {
                                key: "start",
                                value: function(e) {
                                    this._tracer = e
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    this._tracer.removeListener("options", this._optionsCb)
                                }
                            }, {
                                key: "_handleOptions",
                                value: function(e, t, o) {
                                    t = t.log_to_console;
                                    this._enabled !== t && (this._enabled = t, this._enabled ? o.on("log_added", this._logAddedCb) : o.removeListener("log_added", this._logAddedCb))
                                }
                            }, {
                                key: "_handleLogAdded",
                                value: function(e) {
                                    var t = n.LOG_STRING_TO_LEVEL[e.level],
                                        o = e.message;
                                    if (o) {
                                        var r = e.payload_json;
                                        if (r) try {
                                            r = JSON.parse(r)
                                        } catch (e) {}
                                        switch (t) {
                                            case n.LOG_ERROR:
                                            case n.LOG_FATAL:
                                                void 0 !== r ? console.error(o, r) : console.error(o);
                                                break;
                                            case n.LOG_WARN:
                                                void 0 !== r ? console.warn(o, r) : console.warn(o);
                                                break;
                                            case n.LOG_INFO:
                                            default:
                                                void 0 !== r ? console.log(o, r) : console.log(o)
                                        }
                                    }
                                }
                            }]), s);

                        function s() {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._enabled = !1, this._tracer = null, this._optionsCb = this._handleOptions.bind(this), this._logAddedCb = this._handleLogAdded.bind(this)
                        }
                        e.exports = new r
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && i(e.prototype, t), o && i(e, o), e
                            },
                            o = (o = o(9)) && o.__esModule ? o : {
                                default: o
                            };

                        function i(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        var n = "x-b3-",
                            r = (function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(s, o.default), r(s, [{
                                key: "inject",
                                value: function(e, o) {
                                    var r = this;
                                    if (o) {
                                        if ("object" == _typeof(o)) {
                                            var t = e.traceGUID();
                                            return 32 === t.length && "0000000000000000" === t.substr(0, 16) && (t = t.substr(16)), o[this._carrierPrefix + "spanid"] = e._guid, o[this._carrierPrefix + "traceid"] = t, e._sampled ? o[this._carrierPrefix + "sampled"] = "1" : o[this._carrierPrefix + "sampled"] = "0", e.forEachBaggageItem(function(e, t) {
                                                o["" + r._baggagePrefix + e] = t
                                            }), o
                                        }
                                        this._tracer._error("Unexpected '" + _typeof(o) + "' FORMAT_TEXT_MAP carrier in call to inject")
                                    } else this._tracer._error("Unexpected null carrier in call to inject")
                                }
                            }]), s);

                        function s(e) {
                            ! function(e) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            e = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != _typeof(t) && "function" != typeof t ? e : t
                            }(this, Object.getPrototypeOf(s).call(this, e));
                            return e._carrierPrefix = n, e
                        }
                        t.default = r, e.exports = t.default
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, o) {
                                return t && n(e.prototype, t), o && n(e, o), e
                            },
                            p = s(o(0)),
                            l = s(o(7)),
                            i = s(o(9));

                        function n(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        function s(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var a = "x-datadog-",
                            r = (r(g, [{
                                key: "inject",
                                value: function(e, o) {
                                    var r = this;
                                    if (o) {
                                        if ("object" == _typeof(o)) return o[this._carrierPrefix + "parent-id"] = parseInt(e._guid, 16).toString(), o[this._carrierPrefix + "trace-id"] = parseInt(e.traceGUID(), 16).toString(), e._sampled ? o[this._carrierPrefix + "sampling-priority"] = "1" : o[this._carrierPrefix + "sampling-priority"] = "0", e.forEachBaggageItem(function(e, t) {
                                            o["" + r._baggagePrefix + e] = t
                                        }), o;
                                        this._tracer._error("Unexpected '" + _typeof(o) + "' FORMAT_TEXT_MAP carrier in call to inject")
                                    } else this._tracer._error("Unexpected null carrier in call to inject")
                                }
                            }, {
                                key: "extract",
                                value: function(e) {
                                    var o = this,
                                        r = 0,
                                        i = null,
                                        n = null,
                                        s = !0;
                                    if ((0, p.default)(e, function(e, t) {
                                            if ((t = t.toLowerCase()).substr(0, o._carrierPrefix.length) === o._carrierPrefix) switch (t.substr(o._carrierPrefix.length)) {
                                                case "trace-id":
                                                    r++, n = parseInt(e, 10).toString(16);
                                                    break;
                                                case "parent-id":
                                                    r++, i = parseInt(e, 10).toString(16);
                                                    break;
                                                case "sampling-priority":
                                                    0 === e && (s = !1);
                                                    break;
                                                default:
                                                    o._tracer._error("Unrecognized carrier key '" + t + "' with recognized prefix. Ignoring.")
                                            }
                                        }), 0 === r) return null;
                                    if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + e), null;
                                    var a = new l.default(i, n, s);
                                    return (0, p.default)(e, function(e, t) {
                                        (t = t.toLowerCase()).substr(0, o._baggagePrefix.length) === o._baggagePrefix && (t = t.substr(o._baggagePrefix.length), a.setBaggageItem(t, e))
                                    }), a
                                }
                            }]), g);

                        function g(e) {
                            ! function(e) {
                                if (!(e instanceof g)) throw new TypeError("Cannot call a class as a function")
                            }(this), this._tracer = e, this._baggagePrefix = i.default, this._carrierPrefix = a
                        }
                        t.default = r, e.exports = t.default
                    }], m = {}, n.m = l, n.c = m, n.d = function(e, t, o) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: o
                        })
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                        var o = Object.create(null);
                        if (n.r(o), Object.defineProperty(o, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var r in t) n.d(o, r, function(e) {
                                return t[e]
                            }.bind(null, r));
                        return o
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "", n(n.s = 25);

                    function n(e) {
                        if (m[e]) return m[e].exports;
                        var t = m[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return l[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
                    }
                    var l, m
                }, "object" == _typeof(exports) && "object" == _typeof(module) ? module.exports = k() : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = k) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            },
            73: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                function o(e) {
                    this.buffer = e
                }
                t.default = o
            },
            409: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FORMAT_BINARY = "binary", t.FORMAT_TEXT_MAP = "text_map", t.FORMAT_HTTP_HEADERS = "http_headers", t.REFERENCE_CHILD_OF = "child_of", t.REFERENCE_FOLLOWS_FROM = "follows_from"
            },
            189: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SPAN_KIND = "span.kind", t.SPAN_KIND_RPC_CLIENT = "client", t.SPAN_KIND_RPC_SERVER = "server", t.SPAN_KIND_MESSAGING_PRODUCER = "producer", t.SPAN_KIND_MESSAGING_CONSUMER = "consumer", t.ERROR = "error", t.COMPONENT = "component", t.SAMPLING_PRIORITY = "sampling.priority", t.PEER_SERVICE = "peer.service", t.PEER_HOSTNAME = "peer.hostname", t.PEER_ADDRESS = "peer.address", t.PEER_HOST_IPV4 = "peer.ipv4", t.PEER_HOST_IPV6 = "peer.ipv6", t.PEER_PORT = "peer.port", t.HTTP_URL = "http.url", t.HTTP_METHOD = "http.method", t.HTTP_STATUS_CODE = "http.status_code", t.MESSAGE_BUS_DESTINATION = "message_bus.destination", t.DB_INSTANCE = "db.instance", t.DB_STATEMENT = "db.statement", t.DB_TYPE = "db.type", t.DB_USER = "db.user"
            },
            576: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(409),
                    i = o(703),
                    n = o(451);
                t.childOf = function(e) {
                    return e instanceof n.default && (e = e.context()), new i.default(r.REFERENCE_CHILD_OF, e)
                }, t.followsFrom = function(e) {
                    return e instanceof n.default && (e = e.context()), new i.default(r.REFERENCE_FOLLOWS_FROM, e)
                }
            },
            195: function(e, t, o) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, o = o(698),
                    s = new o.default,
                    a = null;

                function p() {
                    return null !== n && n.apply(this, arguments) || this
                }
                var l = new(n = o.default, i(p, n), p.prototype.startSpan = function() {
                    var e = a || s;
                    return e.startSpan.apply(e, arguments)
                }, p.prototype.inject = function() {
                    var e = a || s;
                    return e.inject.apply(e, arguments)
                }, p.prototype.extract = function() {
                    var e = a || s;
                    return e.extract.apply(e, arguments)
                }, p);
                t.initGlobalTracer = function(e) {
                    a = e
                }, t.globalTracer = function() {
                    return l
                }
            },
            305: function(e, o, t) {
                "use strict";

                function r(e) {
                    for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t])
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var i = t(73);
                o.BinaryCarrier = i.default;
                var n = t(189);
                o.Tags = n;
                i = t(44), n = t(703);
                o.Reference = n.default;
                n = t(451);
                o.Span = n.default;
                n = t(159);
                o.SpanContext = n.default;
                n = t(698);
                o.Tracer = n.Tracer;
                n = t(481);
                o.MockTracer = n.MockTracer, r(t(195)), r(t(409)), r(t(576)), i.initialize()
            },
            481: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(674);
                t.MockContext = r.default;
                r = o(594);
                t.MockSpan = r.default;
                o = o(813);
                t.MockTracer = o.default
            },
            674: function(e, t, o) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, o = o(305),
                    i = (n = o.SpanContext, i(s, n), s.prototype.span = function() {
                        return this._span
                    }, s);

                function s(e) {
                    var t = n.call(this) || this;
                    return t._span = e, t
                }
                t.MockContext = i, t.default = i
            },
            618: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = (r.prototype.firstSpanWithTagValue = function(e, t) {
                    e = this.spansByTag[e];
                    if (!e) return null;
                    t = e[t];
                    return t ? t[0] : null
                }, r);

                function r(e) {
                    var i = this;
                    this.spans = e, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], e.forEach(function(o) {
                        0 === o._finishMs && i.unfinishedSpans.push(o), i.spansByUUID[o.uuid()] = o, i.debugSpans.push(o.debug());
                        var r = o.tags();
                        Object.keys(r).forEach(function(e) {
                            var t = r[e];
                            i.spansByTag[e] = i.spansByTag[e] || {}, i.spansByTag[e][t] = i.spansByTag[e][t] || [], i.spansByTag[e][t].push(o)
                        })
                    })
                }
                t.MockReport = o, t.default = o
            },
            594: function(e, t, o) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, s = o(305),
                    a = o(674),
                    i = (n = s.Span, i(p, n), p.prototype._context = function() {
                        return new a.default(this)
                    }, p.prototype._setOperationName = function(e) {
                        this._operationName = e
                    }, p.prototype._addTags = function(e) {
                        for (var t = 0, o = Object.keys(e); t < o.length; t++) {
                            var r = o[t];
                            this._tags[r] = e[r]
                        }
                    }, p.prototype._log = function(e, t) {
                        this._logs.push({
                            fields: e,
                            timestamp: t
                        })
                    }, p.prototype._finish = function(e) {
                        this._finishMs = e || Date.now()
                    }, p.prototype.uuid = function() {
                        return this._uuid
                    }, p.prototype.operationName = function() {
                        return this._operationName
                    }, p.prototype.durationMs = function() {
                        return this._finishMs - this._startMs
                    }, p.prototype.tags = function() {
                        return this._tags
                    }, p.prototype.tracer = function() {
                        return this._mockTracer
                    }, p.prototype._generateUUID = function() {
                        return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                    }, p.prototype.addReference = function(e) {}, p.prototype.debug = function() {
                        var e = {
                            uuid: this._uuid,
                            operation: this._operationName,
                            millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                        };
                        return Object.keys(this._tags).length && (e.tags = this._tags), e
                    }, p);

                function p(e) {
                    var t = n.call(this) || this;
                    return t._mockTracer = e, t._uuid = t._generateUUID(), t._startMs = Date.now(), t._finishMs = 0, t._operationName = "", t._tags = {}, t._logs = [], t
                }
                t.MockSpan = i, t.default = i
            },
            813: function(e, t, o) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, s = o(305),
                    a = o(618),
                    p = o(594),
                    i = (n = s.Tracer, i(l, n), l.prototype._startSpan = function(e, t) {
                        var o = this._allocSpan();
                        if (o.setOperationName(e), this._spans.push(o), t.references)
                            for (var r = 0, i = t.references; r < i.length; r++) {
                                var n = i[r];
                                o.addReference(n)
                            }
                        return o._startStack = (new Error).stack, o
                    }, l.prototype._inject = function(e, t, o) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, l.prototype._extract = function(e, t) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, l.prototype._allocSpan = function() {
                        return new p.default(this)
                    }, l.prototype.clear = function() {
                        this._spans = []
                    }, l.prototype.report = function() {
                        return new a.default(this._spans)
                    }, l);

                function l() {
                    var e = n.call(this) || this;
                    return e._spans = [], e
                }
                t.MockTracer = i, t.default = i
            },
            44: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(451),
                    i = o(159),
                    n = o(698);
                t.tracer = null, t.spanContext = null, t.span = null, t.initialize = function() {
                    t.tracer = new n.default, t.span = new r.default, t.spanContext = new i.default
                }
            },
            703: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(451),
                    o = (i.prototype.type = function() {
                        return this._type
                    }, i.prototype.referencedContext = function() {
                        return this._referencedContext
                    }, i);

                function i(e, t) {
                    this._type = e, this._referencedContext = t instanceof r.default ? t.context() : t
                }
                t.default = o
            },
            451: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(44),
                    o = (i.prototype.context = function() {
                        return this._context()
                    }, i.prototype.tracer = function() {
                        return this._tracer()
                    }, i.prototype.setOperationName = function(e) {
                        return this._setOperationName(e), this
                    }, i.prototype.setBaggageItem = function(e, t) {
                        return this._setBaggageItem(e, t), this
                    }, i.prototype.getBaggageItem = function(e) {
                        return this._getBaggageItem(e)
                    }, i.prototype.setTag = function(e, t) {
                        var o;
                        return this._addTags(((o = {})[e] = t, o)), this
                    }, i.prototype.addTags = function(e) {
                        return this._addTags(e), this
                    }, i.prototype.log = function(e, t) {
                        return this._log(e, t), this
                    }, i.prototype.logEvent = function(e, t) {
                        return this._log({
                            event: e,
                            payload: t
                        })
                    }, i.prototype.finish = function(e) {
                        this._finish(e)
                    }, i.prototype._context = function() {
                        return r.spanContext
                    }, i.prototype._tracer = function() {
                        return r.tracer
                    }, i.prototype._setOperationName = function(e) {}, i.prototype._setBaggageItem = function(e, t) {}, i.prototype._getBaggageItem = function(e) {}, i.prototype._addTags = function(e) {}, i.prototype._log = function(e, t) {}, i.prototype._finish = function(e) {}, i);

                function i() {}
                t.Span = o, t.default = o
            },
            159: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = (r.prototype.toTraceId = function() {
                    return ""
                }, r.prototype.toSpanId = function() {
                    return ""
                }, r);

                function r() {}
                t.SpanContext = o, t.default = o
            },
            698: function(e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = o(576),
                    i = o(44),
                    n = o(451),
                    o = (s.prototype.startSpan = function(e, t) {
                        var o;
                        return void 0 === t && (t = {}), t.childOf && (o = r.childOf(t.childOf), t.references ? t.references.push(o) : t.references = [o], delete t.childOf), this._startSpan(e, t)
                    }, s.prototype.inject = function(e, t, o) {
                        return e instanceof n.default && (e = e.context()), this._inject(e, t, o)
                    }, s.prototype.extract = function(e, t) {
                        return this._extract(e, t)
                    }, s.prototype._startSpan = function(e, t) {
                        return i.span
                    }, s.prototype._inject = function(e, t, o) {}, s.prototype._extract = function(e, t) {
                        return i.spanContext
                    }, s);

                function s() {}
                t.Tracer = o, t.default = o
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
        var t = __webpack_module_cache__[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.loaded = !0, t.exports
    }
    __webpack_require__.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";

            function t(e, t) {
                e.log({
                    message: t
                })
            }

            function o(e) {
                e.setTag("error", "true")
            }

            function e(e) {
                var t = l.hostnames,
                    o = e || (null === (o = window.location) || void 0 === o ? void 0 : o.hostname);
                return -1 < o.indexOf(t.prod) || -1 < o.indexOf(t.dev)
            }
            var r, i, n, s, a, p = HeaderScripts,
                l = {
                    environments: {
                        dev: "Development",
                        prod: "Production"
                    },
                    metaData: (h = document.querySelector('meta[name="roblox-tracer-meta-data"]'), f = Number.isNaN(null == h || null === (r = h.dataset) || void 0 === r ? void 0 : r.sampleRate) ? 0 : parseInt(null == h || null === (f = h.dataset) || void 0 === f ? void 0 : f.sampleRate, 10), {
                        accessToken: null == h || null === (i = h.dataset) || void 0 === i ? void 0 : i.accessToken,
                        serviceName: null !== (n = null == h || null === (n = h.dataset) || void 0 === n ? void 0 : n.serviceName) && void 0 !== n ? n : "Web",
                        tracerEnabled: "true" === (null == h || null === (s = h.dataset) || void 0 === s ? void 0 : s.tracerEnabled),
                        apiSitesRequestAllowList: null !== (m = null == h || null === (m = h.dataset) || void 0 === m ? void 0 : m.apiSitesRequestAllowList) && void 0 !== m ? m : "",
                        sampleRate: f,
                        isInstrumentPagePerformanceEnabled: null !== (b = "true" === (null == h || null === (b = h.dataset) || void 0 === b ? void 0 : b.isInstrumentPagePerformanceEnabled)) && b
                    }),
                    pageName: (m = document.querySelector('meta[name="page-meta"]'), null !== (M = null == m || null === (M = m.dataset) || void 0 === M ? void 0 : M.internalPageName) && void 0 !== M ? M : null),
                    hostnames: {
                        prod: "roblox.com",
                        dev: "robloxlabs.com"
                    }
                },
                g = __webpack_require__(305),
                u = __webpack_require__(262),
                c = (null === p.environmentSites || void 0 === p.environmentSites ? void 0 : p.environmentSites.isTestSite) ? l.environments.dev : l.environments.prod,
                d = {
                    initTracer: function(e, t) {
                        if (!l.metaData.accessToken) return !1;
                        t = new u.Tracer({
                            access_token: l.metaData.accessToken,
                            component_name: e,
                            tags: {
                                "service.version": c
                            },
                            instrument_page_load: t
                        });
                        return g.initGlobalTracer(t), t
                    },
                    createAndGetSpan: function(e, t) {
                        return g.globalTracer().startSpan(e, t)
                    },
                    finalizeSpan: function(e) {
                        e && e.finish()
                    }
                },
                f = {
                    setXHRRequestLogs: function(e) {
                        t(e, "request_sent")
                    },
                    setXHRResponseSuccessLogs: function(e) {
                        t(e, "request_ok")
                    },
                    setXHRResponseErrorLogs: function(e) {
                        e.log({
                            message: "request_failed"
                        })
                    }
                },
                h = {
                    setErrorTag: o,
                    setXHRRequestTags: function(e, t) {
                        var o, r, i;
                        o = e, e = (r = t).component, t = r.method, r = r.url, o.setTag("span.kind", "client"), o.setTag("component", e), o.setTag("http.method", t), o.setTag("http.url", r), o.setTag("page.name", l.pageName), o.setTag("page.url", null !== (i = null === (r = window) || void 0 === r || null === (i = r.location) || void 0 === i ? void 0 : i.href) && void 0 !== i ? i : ""), o.setTag("user.id", null !== (i = null === p.authenticatedUser || void 0 === p.authenticatedUser ? void 0 : p.authenticatedUser.id) && void 0 !== i ? i : -1), o.setTag("user.agent", null !== (o = null === (o = navigator) || void 0 === o ? void 0 : o.userAgent) && void 0 !== o ? o : null)
                    },
                    setXHRResponseTags: function(e, t) {
                        e.setTag("http.status_code", null == t ? void 0 : t.status)
                    },
                    setXHRResponseErrorTags: function(e, t) {
                        o(e), e.setTag("http.status_code", null == t ? void 0 : t.status)
                    },
                    setPlaceIdTag: function(e, t) {
                        e.setTag("guid:place_id", t)
                    },
                    setDefaultTags: function(e) {
                        e.setTag("span.kind", "client")
                    }
                },
                y = __webpack_require__(305),
                b = {
                    httpRequestCarrier: function(e) {
                        var t = {};
                        return y.globalTracer().inject(e, y.FORMAT_HTTP_HEADERS, t), t
                    },
                    textMapCarrier: function(e) {
                        var t = {};
                        return y.globalTracer().inject(e, y.FORMAT_TEXT_MAP, t), t
                    }
                },
                _ = __webpack_require__(305),
                m = {
                    httpRequestCarrier: function(e) {
                        return _.globalTracer().extract(_.FORMAT_HTTP_HEADERS, e)
                    },
                    textMapCarrier: function(e) {
                        return _.globalTracer().extract(_.FORMAT_TEXT_MAP, e)
                    }
                },
                M = null == l || null === (v = l.metaData) || void 0 === v ? void 0 : v.sampleRate,
                v = Math.floor(100 * Math.random() + 1),
                O = (null == l || null === (a = l.metaData) || void 0 === a ? void 0 : a.tracerEnabled) && v <= M,
                E = null == l || null === (F = l.metaData) || void 0 === F ? void 0 : F.isInstrumentPagePerformanceEnabled,
                v = {
                    isTracerEnabled: O,
                    rootTracer: function() {
                        return O ? d.initTracer(l.metaData.serviceName, E) : null
                    }
                },
                S = l.metaData.apiSitesRequestAllowList.split(","),
                M = {
                    isApiSiteAvailableForTracing: function(t) {
                        return !(!e() || !e(t)) && (!!S.length && S.some(function(e) {
                            return t.includes(e)
                        }))
                    }
                },
                F = {
                    operationNames: {
                        httpRequest: "Web::HTTPRequest"
                    }
                };
            v.rootTracer(), window.RobloxTracer = {
                isTracerEnabled: v.isTracerEnabled,
                instrumentation: d,
                logs: f,
                tags: h,
                inject: b,
                extract: m,
                apiSiteRequestValidator: M,
                tracerConstants: F
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/b7dbbd36b3544216f72c-robloxTracer.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RobloxTracer");